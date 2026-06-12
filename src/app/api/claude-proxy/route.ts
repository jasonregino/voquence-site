import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Claude proxy for Voquence Managed Cloud (Session 3).
 *
 * The desktop app sends the same request shape it already sends to
 * Anthropic (system + messages), but to this route with the user's
 * Supabase access token instead of an Anthropic key:
 *
 *   POST /api/claude-proxy
 *   Authorization: Bearer <supabase access token>
 *   { "system": "...", "messages": [{ "role": "user", "content": "..." }] }
 *
 * Flow:
 *   1. Auth — Bearer token (the app) or session cookie (browser testing)
 *   2. Access — active subscription, OR Founder within their free year.
 *      A Founder who hasn't activated yet is auto-activated on first use.
 *   3. Per-minute rate limit (scripts hit a wall; humans never notice)
 *   4. Monthly cap (10k polishings)
 *   5. Forward to Anthropic with Voquence's key — model is FORCED to Haiku
 *      and max_tokens clamped, so a tampered request can't run up cost
 *   6. Count usage only when Anthropic succeeds
 *
 * The response body is Anthropic's JSON unchanged, so the app's existing
 * parsing (content[0].text) works as-is. Machine-readable `code` fields on
 * errors let Session 4 map them to friendly in-app messages.
 */

export const maxDuration = 30;

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS_CEILING = 1024;
const MONTHLY_CAP = 10_000;
const PER_MINUTE_CAP = 10;
const FOUNDER_FREE_DAYS = 365;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const ANTHROPIC_API_KEY = (process.env.ANTHROPIC_API_KEY ?? "").trim();

export async function POST(request: NextRequest) {
  const admin = createAdminClient();

  // ---- 1. Who is calling? -------------------------------------------------
  let userId: string | null = null;

  const authHeader = request.headers.get("authorization") ?? "";
  const bearer = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length).trim()
    : null;

  if (bearer) {
    const {
      data: { user },
    } = await admin.auth.getUser(bearer);
    userId = user?.id ?? null;
  } else {
    // Cookie fallback so the flow can be exercised from the website while
    // signed in (useful for testing; the desktop app always sends Bearer).
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userId = user?.id ?? null;
  }

  if (!userId) {
    return NextResponse.json(
      {
        code: "auth_required",
        error: "Not authenticated. Sign in to Voquence Managed Cloud.",
      },
      { status: 401 }
    );
  }

  // ---- 2. Do they have Managed Cloud access? ------------------------------
  const [{ data: profile }, { data: subs }] = await Promise.all([
    admin
      .from("profiles")
      .select("is_founder, founder_cloud_activated_at, cloud_free_forever")
      .eq("id", userId)
      .maybeSingle(),
    admin
      .from("subscriptions")
      .select("status")
      .eq("user_id", userId),
  ]);

  const hasSubscription = !!subs?.some((s) =>
    ["active", "trialing", "past_due"].includes(s.status)
  );

  let hasAccess = hasSubscription;

  if (!hasAccess && profile?.is_founder) {
    if (profile.cloud_free_forever) {
      hasAccess = true;
    } else if (!profile.founder_cloud_activated_at) {
      // Founder's first Managed Cloud use — start their free year now so
      // "it just works" instead of bouncing them to the website to click
      // an Activate button first.
      const activatedAt = new Date().toISOString();
      const { error: activateError } = await admin
        .from("profiles")
        .update({
          founder_cloud_activated_at: activatedAt,
          updated_at: activatedAt,
        })
        .eq("id", userId);
      if (!activateError) {
        hasAccess = true;
        console.log("[claude-proxy] auto-activated founder year for", userId);
      }
    } else {
      const activated = new Date(profile.founder_cloud_activated_at).getTime();
      const daysUsed = (Date.now() - activated) / MS_PER_DAY;
      if (daysUsed < FOUNDER_FREE_DAYS) {
        hasAccess = true;
      } else {
        return NextResponse.json(
          {
            code: "founder_year_expired",
            error:
              "Your free Founder year of Managed Cloud has ended. Subscribe at voquence.com/managed-cloud to keep going, or switch to BYOK in Settings.",
          },
          { status: 403 }
        );
      }
    }
  }

  if (!hasAccess) {
    return NextResponse.json(
      {
        code: "subscription_required",
        error:
          "Managed Cloud requires an active subscription. Subscribe at voquence.com/managed-cloud, or use your own Anthropic key (BYOK) in Settings.",
      },
      { status: 403 }
    );
  }

  // ---- 3. Per-minute rate limit -------------------------------------------
  const { data: minuteCount, error: rateError } = await admin.rpc(
    "bump_minute_rate",
    { p_user_id: userId }
  );
  if (rateError) {
    console.error("[claude-proxy] rate-limit rpc failed:", rateError);
    return NextResponse.json(
      { code: "internal_error", error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
  if (typeof minuteCount === "number" && minuteCount > PER_MINUTE_CAP) {
    return NextResponse.json(
      {
        code: "rate_limited",
        error: "Too many requests at once. Wait a few seconds and try again.",
      },
      { status: 429 }
    );
  }

  // ---- 4. Monthly cap ------------------------------------------------------
  const monthBucket = new Date().toISOString().slice(0, 7) + "-01";
  const { data: usageRow } = await admin
    .from("usage_logs")
    .select("polishing_count")
    .eq("user_id", userId)
    .eq("month", monthBucket)
    .maybeSingle();

  const used = usageRow?.polishing_count ?? 0;
  if (used >= MONTHLY_CAP) {
    return NextResponse.json(
      {
        code: "monthly_cap_reached",
        error:
          "You've hit this month's 10,000-polishing limit. It resets on the 1st. (If you genuinely need more, email jason@voquence.com.)",
      },
      { status: 429 }
    );
  }

  // ---- 5. Forward to Anthropic ---------------------------------------------
  if (!ANTHROPIC_API_KEY) {
    console.error("[claude-proxy] ANTHROPIC_API_KEY is not configured");
    return NextResponse.json(
      { code: "internal_error", error: "Service not configured. Try again later." },
      { status: 500 }
    );
  }

  let body: {
    system?: unknown;
    messages?: unknown;
    max_tokens?: unknown;
    temperature?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { code: "bad_request", error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return NextResponse.json(
      { code: "bad_request", error: "Request must include a messages array." },
      { status: 400 }
    );
  }

  // Cost safety: the model is OURS to choose, never the caller's, and
  // max_tokens/temperature are clamped to sane bounds.
  const maxTokens = Math.min(
    typeof body.max_tokens === "number" && body.max_tokens > 0
      ? Math.floor(body.max_tokens)
      : MAX_TOKENS_CEILING,
    MAX_TOKENS_CEILING
  );
  const temperature =
    typeof body.temperature === "number"
      ? Math.min(Math.max(body.temperature, 0), 1)
      : 0.3;

  const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      temperature,
      ...(typeof body.system === "string" && body.system.length > 0
        ? { system: body.system }
        : {}),
      messages: body.messages,
    }),
  });

  const anthropicBody = await anthropicResponse.json().catch(() => null);

  if (!anthropicResponse.ok || !anthropicBody) {
    const message =
      anthropicBody?.error?.message ?? "Upstream AI request failed.";
    console.error(
      `[claude-proxy] Anthropic error ${anthropicResponse.status}:`,
      message
    );
    // Failed calls don't count against the user's quota.
    return NextResponse.json(
      { code: "upstream_error", error: message },
      { status: 502 }
    );
  }

  // ---- 6. Count the usage (success only) -----------------------------------
  const { data: newCount, error: usageError } = await admin.rpc(
    "increment_usage",
    { p_user_id: userId, p_month: monthBucket }
  );
  if (usageError) {
    // Don't fail the request the user already paid compute for — log loudly.
    console.error("[claude-proxy] usage increment failed:", usageError);
  }

  return NextResponse.json(anthropicBody, {
    headers: {
      "x-voquence-usage": String(newCount ?? used + 1),
      "x-voquence-usage-cap": String(MONTHLY_CAP),
    },
  });
}
