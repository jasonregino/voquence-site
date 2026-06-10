import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Activates a Founder's free year of Managed Cloud. No card, no Stripe
 * subscription — the Founder already paid $19 for the Founding License,
 * which includes one year of Managed Cloud free. We simply stamp the
 * activation date; access runs for 365 days from here.
 *
 * Guarded so only an actual Founder (is_founder = true) can activate, and
 * activation only happens once (the stamp is never overwritten, so the
 * year can't be "reset" by clicking again).
 */
export async function POST(_req: NextRequest) {
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

  const admin = createAdminClient();
  const { data: profile, error } = await admin
    .from("profiles")
    .select("is_founder, founder_cloud_activated_at, cloud_free_forever")
    .eq("id", user.id)
    .maybeSingle();

  if (error || !profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  if (!profile.is_founder) {
    return NextResponse.json(
      { error: "This account is not a Founder." },
      { status: 403 }
    );
  }

  // Already activated (or honored forever) — return the existing state
  // rather than resetting the clock.
  if (profile.cloud_free_forever) {
    return NextResponse.json({ activated_at: null, free_forever: true });
  }
  if (profile.founder_cloud_activated_at) {
    return NextResponse.json({
      activated_at: profile.founder_cloud_activated_at,
      free_forever: false,
    });
  }

  const activatedAt = new Date().toISOString();
  const { error: updateError } = await admin
    .from("profiles")
    .update({ founder_cloud_activated_at: activatedAt, updated_at: activatedAt })
    .eq("id", user.id);

  if (updateError) {
    console.error("[founder/activate] update failed:", updateError);
    return NextResponse.json({ error: "Could not activate" }, { status: 500 });
  }

  return NextResponse.json({ activated_at: activatedAt, free_forever: false });
}
