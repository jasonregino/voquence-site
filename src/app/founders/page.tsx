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
            className="inline-flex items-center gap-3 font-mono font-bold rounded-lg mt-5 px-6 py-3 transition vq-cta"
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
          className="font-mono font-black mb-6 vq-heading"
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
          className="font-mono font-black mb-6 vq-heading"
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
              <strong style={{ color: "#ffffff" }}>$19 one-time.</strong>{" "}
              That&apos;s it. No recurring charges, no surprise renewals,
              no upgrade tier hiding behind it.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                All 11 polish + content modes via your Anthropic key.
              </strong>{" "}
              Free $5 Anthropic credit covers ~17,000 polishings, and typical
              usage runs about 8 cents per month after that. Lifetime access
              to your BYOK setup.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                1 year of Managed Cloud free
              </strong>{" "}
              (worth $119.88). Starts the day you activate Managed Cloud, not
              from your purchase date. No Anthropic key needed for that year,
              Voquence covers the cloud cost. After year 1: $9.99/mo or
              cancel, your call.
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
              <strong style={{ color: "#ffffff" }}>A direct line to Jason.</strong>{" "}
              He reads and answers every Founder email himself, not a support
              queue. You get his address with your purchase.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>
                Grandfather protection, guaranteed.
              </strong>{" "}
              If the polish modes ever become an enforced paid feature in a
              future release, your BYOK access keeps working automatically.
              Your Founding License is permanent.
            </li>
          </ul>
        </div>

        {/* Timeline */}
        <h2
          className="font-mono font-black mb-6 vq-heading"
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
            when="Now live"
            what="Managed Cloud shipped with v0.4.0. Sign up at voquence.com/managed-cloud/signup with the same email you used at checkout, and your 1-year free Managed Cloud kicks in. No Anthropic key needed during your free year."
          />
          <Timeline
            when="1 year after you activate Managed Cloud"
            what="Your free year ends. Either convert to the $9.99/month subscription (or $99/year, save 17%) and keep using Managed Cloud, or cancel and go back to BYOK Anthropic. Your Founding License BYOK access stays forever either way."
          />
          <Timeline
            when="Down the road"
            what="If a future release ever enforces the polish modes as a paid feature, your Founding License BYOK access stays valid automatically. Buy once, covered forever."
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
