import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Stripe webhook handler — the bridge between "money happened in Stripe"
 * and "the database reflects it." Stripe POSTs an event here the instant
 * something changes. We verify the signature, then react.
 *
 * Events we handle:
 *   checkout.session.completed
 *     - mode "payment"      -> a $19 Founding License sale. Record it in
 *                              founding_purchases and flag the buyer as a
 *                              Founder if they already have a profile.
 *     - mode "subscription" -> a Managed Cloud signup. Link the Stripe
 *                              customer id onto the user's profile.
 *   customer.subscription.created | updated | deleted
 *     - Keep the subscriptions table in sync with Stripe's truth
 *       (status + current billing period).
 *
 * Runs on the Node.js runtime (default) so we get the raw request body
 * for signature verification and full access to the admin Supabase client.
 *
 * Idempotent: Stripe retries deliveries, so every write here either
 * upserts or no-ops on conflict.
 */

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    // constructEventAsync verifies the payload was really signed by Stripe
    // with our secret. If anyone forges a request, this throws.
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      webhookSecret
    );
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object);
        break;

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        await syncSubscription(event.data.object);
        break;

      default:
        // Many event types fire that we don't care about. Acknowledge them
        // so Stripe stops retrying, but do nothing.
        break;
    }
  } catch (err) {
    // Returning 500 tells Stripe to retry the delivery later. Good for
    // transient DB hiccups; the idempotent writes make retries safe.
    console.error(`[stripe-webhook] error handling ${event.type}:`, err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

/**
 * A checkout completed. Two flavors based on mode.
 */
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const supabase = createAdminClient();

  if (session.mode === "payment") {
    // $19 Founding License (the only one-time product today).
    const email = (
      session.customer_details?.email ?? session.customer_email ?? ""
    )
      .toLowerCase()
      .trim();

    if (!email) {
      console.warn("[stripe-webhook] founding purchase with no email", session.id);
      return;
    }

    // Record the sale. Unique email + session id make this a no-op on retry.
    const { error: insertError } = await supabase
      .from("founding_purchases")
      .upsert(
        {
          email,
          stripe_checkout_session_id: session.id,
          amount_total: session.amount_total,
        },
        { onConflict: "email", ignoreDuplicates: true }
      );
    if (insertError) {
      // Throw so the POST handler returns 500 and Stripe retries — better a
      // visible failure than a silently-dropped Founding License sale.
      throw new Error(`founding_purchases upsert failed: ${insertError.message}`);
    }

    // If they already have a Managed Cloud profile, flag them now. (If they
    // don't yet, the handle_new_user trigger will flag them at signup.)
    const { error: flagError } = await supabase
      .from("profiles")
      .update({ is_founder: true, updated_at: new Date().toISOString() })
      .eq("email", email);
    if (flagError) {
      throw new Error(`profiles is_founder update failed: ${flagError.message}`);
    }

    console.log("[stripe-webhook] recorded Founding License for", email);
    return;
  }

  if (session.mode === "subscription") {
    // Managed Cloud signup. client_reference_id is the Supabase user id we
    // set when creating the checkout session.
    const userId = session.client_reference_id;
    const customerId =
      typeof session.customer === "string"
        ? session.customer
        : session.customer?.id;

    if (userId && customerId) {
      const { error: linkError } = await supabase
        .from("profiles")
        .update({
          stripe_customer_id: customerId,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId);
      if (linkError) {
        throw new Error(`profile customer link failed: ${linkError.message}`);
      }
      console.log("[stripe-webhook] linked customer", customerId, "to", userId);
    }
    // The subscription row itself is written by the customer.subscription.*
    // events, which carry the status + billing period.
  }
}

/**
 * Mirror a Stripe subscription into the subscriptions table. Fired on
 * create / update / delete. We find the owning user via the customer id
 * cached on their profile.
 */
async function syncSubscription(subscription: Stripe.Subscription) {
  const supabase = createAdminClient();

  const customerId =
    typeof subscription.customer === "string"
      ? subscription.customer
      : subscription.customer.id;

  // Find which user this customer belongs to.
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .maybeSingle();

  if (!profile) {
    // The checkout.session.completed handler links the customer to the
    // profile. If that hasn't landed yet, Stripe will retry this event.
    console.warn(
      "[stripe-webhook] no profile for customer",
      customerId,
      "- will retry"
    );
    throw new Error("Profile not linked yet");
  }

  // Billing period moved onto the subscription item in recent Stripe API
  // versions, so read it there with a fallback to the legacy top-level field.
  const item = subscription.items?.data?.[0];
  const periodStart =
    item?.current_period_start ??
    (subscription as unknown as { current_period_start?: number })
      .current_period_start;
  const periodEnd =
    item?.current_period_end ??
    (subscription as unknown as { current_period_end?: number })
      .current_period_end;

  const { error: subError } = await supabase.from("subscriptions").upsert(
    {
      user_id: profile.id,
      stripe_subscription_id: subscription.id,
      status: subscription.status,
      current_period_start: periodStart
        ? new Date(periodStart * 1000).toISOString()
        : null,
      current_period_end: periodEnd
        ? new Date(periodEnd * 1000).toISOString()
        : null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "stripe_subscription_id" }
  );
  if (subError) {
    throw new Error(`subscription upsert failed: ${subError.message}`);
  }

  console.log(
    "[stripe-webhook] synced subscription",
    subscription.id,
    "->",
    subscription.status
  );
}
