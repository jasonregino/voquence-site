import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FOUNDING_LICENSE_URL } from "@/app/page";

export const metadata = {
  title: "Managed Cloud · Voquence",
  description:
    "The 11 polish + content modes without bringing your own Anthropic key. $9.99/month. Free for Founders.",
};

export default function ManagedCloudPage() {
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
        <p
          className="max-w-2xl mb-10"
          style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
        >
          The 11 polish + content modes with zero setup. No Anthropic key
          required, no per-call thinking, no key management. Voquence handles
          the cloud. You speak, the polished output pastes at your cursor.
        </p>

        {/* Pricing */}
        <div
          className="rounded-xl p-6 mb-10"
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
            className="mb-4"
            style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
          >
            Includes up to 10,000 polishings per month (about 333 per day).
            Cancel anytime, no commitment.
          </p>
          <p
            className="font-mono"
            style={{
              color: "#22c55e",
              fontSize: "11px",
              letterSpacing: "0.15em",
            }}
          >
            FREE FOREVER FOR FOUNDING LICENSE BUYERS
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <Link
            href="/managed-cloud/signup"
            className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-6 py-4 transition"
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
            className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-6 py-4 transition"
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
              <strong style={{ color: "#ffffff" }}>Prefer BYOK?</strong> Use
              your own Anthropic key with the free Voquence download. Free $5
              credit covers ~17,000 polishings.{" "}
              <Link
                href="/download"
                className="underline"
                style={{ color: "var(--brand-cyan)" }}
              >
                Download Voquence →
              </Link>
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                Want Managed Cloud free forever?
              </strong>{" "}
              Buy a Founding License at{" "}
              <a
                href={FOUNDING_LICENSE_URL}
                className="underline"
                style={{ color: "var(--brand-cyan)" }}
              >
                $19 one-time (first 100 only)
              </a>
              . Then sign up here with the same email and you get Managed Cloud
              at no charge, locked for life.
            </li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
