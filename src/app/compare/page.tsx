import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Voquence vs Spokenly, Glaido, Wispr Flow",
  description:
    "Honest comparison of Voquence against the leading AI dictation apps.",
};

export default function ComparePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

      {/* Hero */}
      <section className="relative z-10 px-6 sm:px-12 pt-8 pb-12 max-w-5xl mx-auto w-full">
        <h1
          className="font-mono font-black mb-4"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(28px, 4vw, 40px)",
            letterSpacing: "0.18em",
          }}
        >
          HONEST COMPARISON
        </h1>
        <p
          className="max-w-2xl"
          style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
        >
          Voquence vs Spokenly, Glaido, and Wispr Flow. No hand-waving. Here&apos;s
          where Voquence wins, where it loses, and where each tool actually fits.
        </p>
      </section>

      {/* The one-liner */}
      <section className="relative z-10 px-6 sm:px-12 mb-16 max-w-5xl mx-auto w-full">
        <div
          className="rounded-xl p-8"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-cyan)",
            boxShadow: "0 0 32px rgba(0, 212, 255, 0.15)",
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
            THE ONE-LINER
          </p>
          <p
            style={{
              color: "#ffffff",
              fontSize: "20px",
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            Other dictation apps give you a transcript. Voquence gives you
            finished content.
          </p>
          <p
            className="mt-4"
            style={{ color: "#bbbbbb", fontSize: "14px", lineHeight: 1.6 }}
          >
            Spokenly, Glaido, and Wispr Flow are great at turning your voice
            into text. Voquence is built for what you do next: turning that voice
            into a book description, a tweet thread, a polished email, a
            structured AI prompt. That&apos;s the actual product.
          </p>
        </div>
      </section>

      {/* Free tier comparison */}
      <ComparisonSection
        title="FREE TIER"
        competitors={["Spokenly", "Glaido", "Wispr Flow"]}
        voquenceLabel="Voquence"
        rows={FREE_TIER_ROWS}
      />

      {/* Paid tier comparison */}
      <ComparisonSection
        title="PAID TIER"
        competitors={["Spokenly Pro", "Glaido Pro", "Wispr Flow Pro"]}
        voquenceLabel="Voquence Founding"
        rows={PAID_TIER_ROWS}
      />

      {/* Where we lose */}
      <section className="relative z-10 px-6 sm:px-12 mb-16 max-w-5xl mx-auto w-full">
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "20px",
            letterSpacing: "0.18em",
          }}
        >
          WHERE VOQUENCE LOSES (BEING HONEST)
        </h2>
        <ul
          className="space-y-3"
          style={{ color: "#cccccc", fontSize: "15px", lineHeight: 1.6 }}
        >
          <Loss>
            <strong style={{ color: "#ffffff" }}>Cheaper paid tiers exist.</strong>{" "}
            Spokenly is $9.99/mo. Wispr Flow is around $12. If you just need
            dictation that types into any app, those are great choices and you
            won&apos;t miss what Voquence offers.
          </Loss>
          <Loss>
            <strong style={{ color: "#ffffff" }}>Mac only at launch.</strong>{" "}
            Windows is coming, but if you switch between machines, Spokenly and
            Wispr Flow already cover all three platforms.
          </Loss>
          <Loss>
            <strong style={{ color: "#ffffff" }}>
              Local Whisper needs a one-time model download.
            </strong>{" "}
            Local Whisper is live and free, but you download a one-time ~141 MB
            model from Settings before your first fully offline session.
            Spokenly&apos;s local models work the same way. It&apos;s a one-time
            step, not a subscription.
          </Loss>
        </ul>
      </section>

      {/* Where we win */}
      <section className="relative z-10 px-6 sm:px-12 mb-16 max-w-5xl mx-auto w-full">
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "20px",
            letterSpacing: "0.18em",
          }}
        >
          WHERE VOQUENCE WINS
        </h2>
        <ul
          className="space-y-3"
          style={{ color: "#cccccc", fontSize: "15px", lineHeight: 1.6 }}
        >
          <Win>
            <strong style={{ color: "#ffffff" }}>
              Voice into finished content, not just text.
            </strong>{" "}
            Speak a rough idea. Get back a book description, a tweet thread, a
            structured AI prompt, a polished email. Spokenly, Glaido, and Wispr
            Flow don&apos;t ship these modes. Voquence has 11.
          </Win>
          <Win>
            <strong style={{ color: "#ffffff" }}>
              Bring your own keys at zero markup.
            </strong>{" "}
            Bring your own OpenAI and Anthropic keys and pay only what your
            providers charge (usually about a dollar a month for normal use). No
            usage caps. Glaido and Wispr Flow don&apos;t offer this.
          </Win>
          <Win>
            <strong style={{ color: "#ffffff" }}>
              Built for the &ldquo;type for a living&rdquo; crowd.
            </strong>{" "}
            Authors, founders, content creators, prompt engineers. The modes
            are tuned for the actual outputs those people need to ship every day.
          </Win>
        </ul>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 sm:px-12 pb-20 max-w-5xl mx-auto w-full">
        <div
          className="rounded-xl p-8 text-center"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
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
            DECIDE FOR YOURSELF
          </p>
          <p
            className="mb-6"
            style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
          >
            Voquence is free to try. No keys, no signup. Local Whisper installs during Welcome and Raw Transcript works immediately.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-7 py-4 transition"
            style={{
              background: "var(--brand-cyan)",
              color: "#0a0a0a",
              fontSize: "14px",
              letterSpacing: "0.15em",
              boxShadow: "0 0 32px rgba(0, 212, 255, 0.25)",
            }}
          >
            ↓ DOWNLOAD FOR MAC
          </Link>
        </div>

        <p
          className="text-center mt-8 font-mono"
          style={{
            color: "var(--brand-muted)",
            fontSize: "10px",
            letterSpacing: "0.1em",
          }}
        >
          PRICING ACCURATE AS OF JUNE 2026. CHECK COMPETITOR SITES FOR CURRENT
          PRICING.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}

/**
 * Comparison row — one feature compared across Voquence and 3 competitors.
 * `pending` styles the Voquence cell as italic-grey to signal "shipping soon"
 * (e.g. Local Mode, custom modes).
 */
type CompareCell = { text: string; pending?: boolean };
type CompareRow = {
  label: string;
  voquence: CompareCell;
  competitors: CompareCell[]; // length 3, same order as competitors prop
};

const FREE_TIER_ROWS: CompareRow[] = [
  {
    label: "Unlimited usage",
    voquence: { text: "Yes (Local + Your Keys)" },
    competitors: [
      { text: "Yes (Local + Your Keys)" },
      { text: "No, 2,000 words/wk cap" },
      { text: "No, about 2,000 words/wk cap" },
    ],
  },
  {
    label: "Works offline",
    voquence: { text: "Yes (Local Whisper, v0.2.0)" },
    competitors: [{ text: "Yes" }, { text: "No" }, { text: "No" }],
  },
  {
    label: "No API keys needed",
    voquence: { text: "Yes, with Local Whisper" },
    competitors: [{ text: "Yes (Local Mode)" }, { text: "Yes" }, { text: "Yes" }],
  },
  {
    label: "Bring your own keys",
    voquence: { text: "Yes, OpenAI + Anthropic" },
    competitors: [{ text: "Yes" }, { text: "No" }, { text: "No" }],
  },
  {
    label: "AI content modes (Book Description, Tweet, Prompt, etc.)",
    voquence: { text: "1 mode free (Raw Transcript)" },
    competitors: [
      { text: "None" },
      { text: "Auto-formatting only" },
      { text: "None" },
    ],
  },
  {
    label: "No credit card to start",
    voquence: { text: "Yes" },
    competitors: [{ text: "Yes" }, { text: "Yes" }, { text: "Yes" }],
  },
  {
    label: "Works in any Mac app",
    voquence: { text: "Yes" },
    competitors: [{ text: "Yes" }, { text: "Yes" }, { text: "Yes" }],
  },
];

const PAID_TIER_ROWS: CompareRow[] = [
  {
    label: "Price",
    voquence: { text: "$19 one-time (first 100), then $29" },
    competitors: [
      { text: "$9.99/mo" },
      { text: "$20/mo" },
      { text: "~$12/mo" },
    ],
  },
  {
    label: "One-time vs subscription",
    voquence: { text: "One-time. Own it." },
    competitors: [
      { text: "Subscription" },
      { text: "Subscription" },
      { text: "Subscription" },
    ],
  },
  {
    label: "Unlimited dictation",
    voquence: { text: "Yes" },
    competitors: [{ text: "Yes" }, { text: "Yes" }, { text: "Yes" }],
  },
  {
    label: "AI content modes",
    voquence: { text: "11 (Book Description, Tweet, Email, Tech Support, more)" },
    competitors: [{ text: "None" }, { text: "None" }, { text: "None" }],
  },
  {
    label: "Managed cloud (no API keys)",
    voquence: { text: "Managed Cloud tier ships later (~$9.99/mo)", pending: true },
    competitors: [{ text: "Yes" }, { text: "Yes" }, { text: "Yes" }],
  },
  {
    label: "Custom modes / prompts",
    voquence: { text: "v1.1 ship", pending: true },
    competitors: [{ text: "Limited" }, { text: "Yes" }, { text: "Limited" }],
  },
  {
    label: "Platforms",
    voquence: { text: "Mac (Windows soon)" },
    competitors: [
      { text: "Mac, iOS, Windows" },
      { text: "Mac only" },
      { text: "Mac, Windows, iPhone, Android" },
    ],
  },
  {
    label: "Custom dictionary",
    voquence: { text: "v1.1 ship", pending: true },
    competitors: [{ text: "Not advertised" }, { text: "Yes" }, { text: "Yes" }],
  },
];

/**
 * Renders the same comparison data two ways: a 5-column desktop table
 * (visible md+), and a stack of per-feature mobile cards (visible below md).
 *
 * Cowork's audit (2026-06-04) flagged that the original table forced
 * horizontal scroll inside its own container on mobile, hiding Glaido and
 * Wispr Flow columns entirely. Stacked cards let mobile visitors see every
 * value without swiping.
 */
function ComparisonSection({
  title,
  competitors,
  voquenceLabel,
  rows,
}: {
  title: string;
  competitors: string[]; // 3 names, Spokenly/Glaido/Wispr order
  voquenceLabel: string;
  rows: CompareRow[];
}) {
  return (
    <section className="relative z-10 px-6 sm:px-12 mb-16 max-w-5xl mx-auto w-full">
      <h2
        className="font-mono font-black mb-6"
        style={{
          color: "var(--brand-cyan)",
          fontSize: "20px",
          letterSpacing: "0.18em",
        }}
      >
        {title}
      </h2>

      {/* Desktop: 5-column table (md and up) */}
      <div className="hidden md:block">
        <table
          className="w-full text-left"
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid var(--brand-border)" }}>
              <Th>Feature</Th>
              <Th highlighted>{voquenceLabel}</Th>
              {competitors.map((c) => (
                <Th key={c}>{c}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                style={{ borderBottom: "1px solid var(--brand-border)" }}
              >
                <td
                  className="py-4 px-4"
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {row.label}
                </td>
                <DesktopCell cell={row.voquence} />
                {row.competitors.map((c, i) => (
                  <DesktopCell key={i} cell={c} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards (below md) */}
      <div className="md:hidden space-y-4">
        {rows.map((row) => (
          <div
            key={row.label}
            className="rounded-lg overflow-hidden"
            style={{
              background: "var(--brand-surface)",
              border: "1px solid var(--brand-border)",
            }}
          >
            <div
              className="px-4 py-3"
              style={{
                background: "rgba(0, 212, 255, 0.05)",
                borderBottom: "1px solid var(--brand-border)",
              }}
            >
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {row.label}
              </p>
            </div>
            <div>
              <MobileRow
                label={voquenceLabel}
                cell={row.voquence}
                highlighted
              />
              {row.competitors.map((c, i) => (
                <MobileRow key={i} label={competitors[i]} cell={c} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Th({
  children,
  highlighted = false,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <th
      className="font-mono font-black py-4 px-4"
      style={{
        color: highlighted ? "var(--brand-cyan)" : "var(--brand-muted)",
        fontSize: "11px",
        letterSpacing: "0.15em",
        textAlign: "left",
        verticalAlign: "bottom",
        background: highlighted ? "rgba(0, 212, 255, 0.05)" : "transparent",
      }}
    >
      {children}
    </th>
  );
}

function DesktopCell({ cell }: { cell: CompareCell }) {
  return (
    <td
      className="py-4 px-4"
      style={{
        color: cell.pending ? "#888888" : "#cccccc",
        fontSize: "13px",
        lineHeight: 1.5,
        fontStyle: cell.pending ? "italic" : "normal",
      }}
    >
      {cell.text}
    </td>
  );
}

function MobileRow({
  label,
  cell,
  highlighted = false,
}: {
  label: string;
  cell: CompareCell;
  highlighted?: boolean;
}) {
  return (
    <div
      className="flex items-start justify-between gap-3 px-4 py-3"
      style={{
        borderBottom: "1px solid var(--brand-border)",
        background: highlighted ? "rgba(0, 212, 255, 0.04)" : "transparent",
      }}
    >
      <span
        className="font-mono flex-shrink-0"
        style={{
          color: highlighted ? "var(--brand-cyan)" : "var(--brand-muted)",
          fontSize: "10px",
          letterSpacing: "0.15em",
          fontWeight: 800,
          width: "90px",
          paddingTop: "2px",
        }}
      >
        {label.toUpperCase()}
      </span>
      <span
        style={{
          color: cell.pending ? "#888888" : "#dddddd",
          fontSize: "13px",
          lineHeight: 1.5,
          fontStyle: cell.pending ? "italic" : "normal",
          textAlign: "right",
          flex: 1,
        }}
      >
        {cell.text}
      </span>
    </div>
  );
}

function Win({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        style={{
          color: "var(--brand-cyan)",
          fontSize: "16px",
          marginTop: "1px",
        }}
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function Loss({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        style={{
          color: "#888888",
          fontSize: "16px",
          marginTop: "1px",
        }}
      >
        ×
      </span>
      <span>{children}</span>
    </li>
  );
}
