import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FOUNDING_LICENSE_URL } from "@/app/page";

export const metadata = {
  title: "Founders · Voquence",
  description:
    "The first 100 people who bought a Voquence Founding License and helped get this off the ground.",
};

/**
 * Manual list of Founding License buyers who opted in to public credit.
 * Add a new entry every time someone buys and confirms they want to be
 * credited (default is first name only — protect privacy by default).
 *
 * When v0.4 + license enforcement ships, this could become dynamic via
 * a Stripe API lookup, but a hand-curated list is honest and intentional
 * for the first 100. People know a human added them.
 */
const FOUNDERS: Array<{ position: number; name: string; note?: string }> = [
  // Buyer #1 was Ives, Jason's friend who helped validate the live Stripe
  // flow on 2026-06-09. Opted in to first-name public credit.
  { position: 1, name: "Ives", note: "First Founder · 2026-06-09" },
];

const TOTAL_SPOTS = 100;

export default function FoundersPage() {
  const claimed = FOUNDERS.length;
  const remaining = TOTAL_SPOTS - claimed;

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
          THE FOUNDING 100
        </h1>
        <p
          className="max-w-2xl mb-8"
          style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
        >
          The first 100 people who bought a Voquence Founding License and
          helped get this off the ground. Each Founder paid $19 when the
          product was still v0.3.x. Their price is locked at $19 for life.
        </p>

        {/* Counter */}
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
            FOUNDING 100 STATUS
          </p>
          <p
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {claimed} of {TOTAL_SPOTS} claimed
          </p>
          <p
            className="mt-2"
            style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.5 }}
          >
            {remaining} Founding License spots remain at $19. After the
            100th buyer, the price moves to $29 for everyone new. Founders
            keep their $19 price for life.
          </p>
          <a
            href={FOUNDING_LICENSE_URL}
            className="inline-flex items-center gap-3 font-mono font-bold rounded-lg mt-5 px-6 py-3 transition"
            style={{
              background: "var(--brand-cyan)",
              color: "#0a0a0a",
              fontSize: "13px",
              letterSpacing: "0.15em",
              boxShadow: "0 0 24px rgba(0, 212, 255, 0.25)",
            }}
          >
            CLAIM YOUR FOUNDER SPOT · $19
          </a>
        </div>

        {/* Founders list */}
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "16px",
            letterSpacing: "0.18em",
          }}
        >
          FOUNDERS
        </h2>

        <div className="space-y-2 mb-12">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.position}
              className="rounded-lg p-4 flex items-center gap-4"
              style={{
                background: "var(--brand-surface)",
                border: "1px solid var(--brand-border)",
              }}
            >
              <div
                className="font-mono font-black flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  background: "var(--brand-cyan-dim)",
                  color: "var(--brand-cyan)",
                  width: "40px",
                  height: "40px",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                }}
              >
                #{founder.position}
              </div>
              <div className="flex-1">
                <p style={{ color: "#ffffff", fontSize: "15px", fontWeight: 600 }}>
                  {founder.name}
                </p>
                {founder.note && (
                  <p
                    className="font-mono mt-1"
                    style={{
                      color: "var(--brand-muted)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {founder.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* What Founders get */}
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "16px",
            letterSpacing: "0.18em",
          }}
        >
          WHAT EVERY FOUNDER GETS
        </h2>

        <div
          className="rounded-xl p-6 mb-10"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
          }}
        >
          <ul
            className="space-y-3"
            style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
          >
            <li>
              <strong style={{ color: "#ffffff" }}>$19 locked for life.</strong>{" "}
              When the public price moves to $29 after the 100th sale, you
              keep yours at $19.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                Free Managed Cloud when it ships
              </strong>{" "}
              (targeting 1-2 weeks out). No Anthropic key required, no
              recurring fee for Founders. Public price will be $9.99/month.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                All 11 polish + content modes today
              </strong>{" "}
              via Bring Your Own Keys (Anthropic). New Anthropic accounts get
              $5 free credit, which is roughly 17,000 polishings before you
              ever pay anything.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                Vote on the next mode that ships.
              </strong>{" "}
              Founders pick what gets built after the current roadmap.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                Optional public credit on this page.
              </strong>{" "}
              First name only by default. Just reply to your purchase email
              and say you want to be listed.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>Direct line to Jason</strong>{" "}
              at{" "}
              <a
                href="mailto:jason@voquence.com"
                className="underline"
                style={{ color: "var(--brand-cyan)" }}
              >
                jason@voquence.com
              </a>
              . Replies come from Jason personally, not a support queue.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                Grandfather protection when v0.4 ships.
              </strong>{" "}
              When license enforcement turns on, you stay in. Free users
              who haven&apos;t bought by then will need to.
            </li>
          </ul>
        </div>

        {/* Timeline */}
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "16px",
            letterSpacing: "0.18em",
          }}
        >
          WHAT TO EXPECT, WHEN
        </h2>

        <div
          className="rounded-xl p-6 mb-12"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
          }}
        >
          <Timeline
            when="The moment you buy"
            what="You get a personal thank-you email from Jason. Download Voquence (free) and paste your Anthropic key into Settings if you want the 11 polish modes immediately."
          />
          <Timeline
            when="Within ~1-2 weeks"
            what="Managed Cloud ships. You stop needing an Anthropic key for the polish modes. Voquence handles the cloud. Free for Founders, $9.99/month for everyone else."
          />
          <Timeline
            when="v0.4 (soon after Managed Cloud)"
            what="License enforcement turns on. The 11 polish modes become a paid feature. You stay in automatically. Free users who didn't buy will need to."
            last
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Timeline({
  when,
  what,
  last,
}: {
  when: string;
  what: string;
  last?: boolean;
}) {
  return (
    <div
      className={last ? "" : "mb-5 pb-5"}
      style={{ borderBottom: last ? "none" : "1px solid var(--brand-border)" }}
    >
      <p
        className="font-mono mb-1"
        style={{
          color: "var(--brand-cyan)",
          fontSize: "11px",
          letterSpacing: "0.2em",
        }}
      >
        {when.toUpperCase()}
      </p>
      <p style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}>
        {what}
      </p>
    </div>
  );
}
