import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FOUNDING_LICENSE_URL } from "@/app/page";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  ManagedCloudDashboard,
  type DashboardState,
} from "./dashboard";

export const metadata = {
  title: "Managed Cloud · Voquence",
  description:
    "The 11 polish + content modes without bringing your own Anthropic key. $9.99/month. Free for Founders.",
};

const FOUNDER_FREE_DAYS = 365;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

/**
 * Compute which dashboard state a signed-in user is in. Priority:
 *   1. A real paid subscription wins (active / trialing / past_due).
 *   2. Founder benefits (forever, free-year active, not yet activated).
 *   3. Otherwise: nothing yet (or Founder whose free year has ended).
 */
async function getDashboardState(userId: string): Promise<DashboardState> {
  const admin = createAdminClient();

  const [{ data: profile }, { data: subs }] = await Promise.all([
    admin
      .from("profiles")
      .select("is_founder, founder_cloud_activated_at, cloud_free_forever")
      .eq("id", userId)
      .maybeSingle(),
    admin
      .from("subscriptions")
      .select("status, current_period_end")
      .eq("user_id", userId)
      .order("created_at", { ascending: false }),
  ]);

  const activeSub = subs?.find((s) =>
    ["active", "trialing", "past_due"].includes(s.status)
  );
  if (activeSub) {
    return {
      kind: "subscribed",
      status: activeSub.status,
      periodEnd: activeSub.current_period_end,
    };
  }

  if (profile?.is_founder) {
    if (profile.cloud_free_forever) return { kind: "founder_forever" };

    if (!profile.founder_cloud_activated_at) {
      return { kind: "founder_not_activated" };
    }

    const activated = new Date(profile.founder_cloud_activated_at).getTime();
    const end = activated + FOUNDER_FREE_DAYS * MS_PER_DAY;
    const daysLeft = Math.ceil((end - Date.now()) / MS_PER_DAY);

    if (daysLeft > 0) {
      return {
        kind: "founder_active",
        daysLeft,
        endDate: new Date(end).toISOString(),
      };
    }
    return { kind: "founder_expired" };
  }

  return { kind: "none" };
}

export default async function ManagedCloudPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const { checkout } = await searchParams;
  const justCheckedOut = checkout === "success";

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

      <section className="relative z-10 px-6 sm:px-12 pt-8 pb-12 max-w-3xl mx-auto w-full">
        <h1
          className="font-mono font-black mb-4"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(28px, 4vw, 40px)",
            letterSpacing: "0.18em",
          }}
        >
          MANAGED CLOUD
        </h1>

        {user ? (
          <>
            <p
              className="max-w-2xl mb-10"
              style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
            >
              Your Managed Cloud account. Manage your plan and see where you
              stand below.
            </p>
            <ManagedCloudDashboard
              email={user.email ?? ""}
              state={await getDashboardState(user.id)}
              justCheckedOut={justCheckedOut}
            />
          </>
        ) : (
          <LoggedOutView />
        )}
      </section>

      <SiteFooter />
    </main>
  );
}

/**
 * The original marketing view, shown to visitors who aren't signed in.
 */
function LoggedOutView() {
  return (
    <>
      <p
        className="max-w-2xl mb-10"
        style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
      >
        The 11 polish + content modes with zero setup. No Anthropic key
        required, no per-call thinking, no key management. Voquence handles the
        cloud. You speak, the polished output pastes at your cursor.
      </p>

      {/* Pricing */}
      <div
        className="rounded-xl p-6 mb-10 vq-card"
        style={{
          background: "var(--brand-surface)",
          border: "1px solid var(--brand-cyan)",
          boxShadow: "0 0 24px rgba(0, 212, 255, 0.15)",
        }}
      >
        <p
          className="font-mono mb-2"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "11px",
            letterSpacing: "0.2em",
          }}
        >
          PRICING
        </p>
        <div className="flex items-baseline gap-3 mb-3">
          <span
            style={{
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            $9.99
          </span>
          <span
            className="font-mono"
            style={{
              color: "var(--brand-muted)",
              fontSize: "12px",
              letterSpacing: "0.1em",
            }}
          >
            PER MONTH
          </span>
        </div>
        <p
          className="mb-3"
          style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
        >
          Or annual at <strong style={{ color: "#ffffff" }}>$99/year</strong>{" "}
          (save 17%, two months free). Includes up to 10,000 polishings per
          month (about 333 per day). Cancel anytime, no commitment.
        </p>
        <p
          className="font-mono"
          style={{
            color: "#22c55e",
            fontSize: "11px",
            letterSpacing: "0.15em",
          }}
        >
          FOUNDERS: 1 YEAR FREE
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <Link
          href="/managed-cloud/signup"
          className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-6 py-4 transition vq-cta"
          style={{
            background: "var(--brand-cyan)",
            color: "#0a0a0a",
            fontSize: "14px",
            letterSpacing: "0.15em",
            boxShadow: "0 0 32px rgba(0, 212, 255, 0.25)",
          }}
        >
          CREATE ACCOUNT
        </Link>
        <Link
          href="/managed-cloud/login"
          className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-6 py-4 transition vq-cta"
          style={{
            background: "transparent",
            color: "var(--brand-cyan)",
            border: "1px solid var(--brand-cyan)",
            fontSize: "14px",
            letterSpacing: "0.15em",
          }}
        >
          SIGN IN
        </Link>
      </div>

      {/* Not for you? */}
      <div
        className="rounded-xl p-6"
        style={{
          background: "var(--brand-surface)",
          border: "1px solid var(--brand-border)",
        }}
      >
        <h2
          className="font-mono font-black mb-3"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "14px",
            letterSpacing: "0.18em",
          }}
        >
          NOT QUITE READY?
        </h2>
        <ul
          className="space-y-2"
          style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
        >
          <li>
            <strong style={{ color: "#ffffff" }}>Prefer BYOK?</strong> Use your
            own Anthropic key with the free Voquence download. Free $5 credit
            covers ~17,000 polishings.{" "}
            <Link
              href="/download"
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              Download Voquence →
            </Link>
          </li>
          <li>
            <strong style={{ color: "#ffffff" }}>
              Want 1 year of Managed Cloud free?
            </strong>{" "}
            Buy a Founding License at{" "}
            <a
              href={FOUNDING_LICENSE_URL}
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              $19 one-time (first 100 only)
            </a>
            . Sign up here with the same email and you get a year of Managed
            Cloud at no charge. After year one, $9.99/mo or cancel.
          </li>
        </ul>
      </div>
    </>
  );
}
