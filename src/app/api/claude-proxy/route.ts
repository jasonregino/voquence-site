import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Claude proxy for Voquence Managed Cloud subscribers.
 *
 * Session 1 stub. This route is wired with auth check + 401 handling
 * but does NOT yet call Anthropic. That happens in Session 3, alongside
 * the metering (10k polishings/mo cap) and the Founder bypass.
 *
 * The flow when complete:
 *   1. Auth check (this file, today)
 *   2. Lookup subscription state and is_founder flag (Session 3)
 *   3. Check current month's usage against cap (Session 3)
 *   4. Forward to Anthropic with Voquence's master key (Session 3)
 *   5. Stream result back to caller (Session 3)
 *   6. Atomically increment usage counter (Session 3)
 *
 * Runs on Vercel Edge runtime so streaming works under the 10s
 * Hobby-tier function timeout. Streaming chunks reset the timer each
 * time, effectively bypassing the hard limit during long Claude calls.
 */
export const runtime = "edge";

export async function POST(request: NextRequest) {
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

  // Session 3: subscription check, usage cap, Anthropic call, streaming.
  // Stubbed today so the auth wiring can be tested in isolation.
  return NextResponse.json(
    {
      message:
        "Claude proxy stub — Session 1 wires auth only. Anthropic forwarding ships in Session 3.",
      authenticated_as: user.email,
    },
    { status: 501 }
  );
}
