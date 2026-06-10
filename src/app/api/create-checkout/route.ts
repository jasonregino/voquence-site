import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { stripe, MANAGED_CLOUD_PRICES, type ManagedCloudPlan } from "@/lib/stripe";

/**
 * Creates a Stripe Checkout Session for a Managed Cloud subscription and
 * returns its URL. The signed-in user clicks "Subscribe", we build the
 * session here, the client redirects the browser to Stripe's hosted page.
 *
 * This is the REGULAR subscriber path ($9.99/mo or $99/yr). Founders do
 * NOT come through here for their free year — that's gated in-app with no
 * card required (see the founder activation route).
 *
 * On success Stripe sends the user back to /managed-cloud?checkout=success
 * and fires checkout.session.completed at our webhook, which links the
 * Stripe customer to the profile and records the subscription.
 */
export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Not authenticated. Sign in at /managed-cloud/login." },
      { status: 401 }
    );
  }

  let plan: ManagedCloudPlan;
  try {
    const body = await req.json();
    plan = body.plan;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const priceId = MANAGED_CLOUD_PRICES[plan];
  if (!priceId) {
    return NextResponse.json(
      { error: "Invalid plan. Use 'monthly' or 'annual'." },
      { status: 400 }
    );
  }

  // Reuse the user's Stripe customer if we've already created one (so they
  // don't end up with duplicate customer records across checkouts).
  const admin = createAdminClient();
  const { data: profile } = await admin
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .maybeSingle();

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      // Card only — explicitly listing payment methods suppresses Stripe Link
      // (the "Confirm it's you" prompt), for a cleaner, simpler checkout.
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      // Tie the session back to our user so the webhook can link the customer.
      client_reference_id: user.id,
      metadata: { user_id: user.id },
      ...(profile?.stripe_customer_id
        ? { customer: profile.stripe_customer_id }
        : { customer_email: user.email }),
      success_url: `${origin}/managed-cloud?checkout=success`,
      cancel_url: `${origin}/managed-cloud?checkout=cancelled`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[create-checkout] Stripe error:", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 }
    );
  }
}
