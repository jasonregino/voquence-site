import Link from "next/link";
import { VLogo } from "@/components/VLogo";

export const metadata = {
  title: "Voquence vs Spokenly, Glaido, Wispr Flow",
  description:
    "Honest comparison of Voquence against the leading AI dictation apps.",
};

export default function ComparePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center px-6 sm:px-12 py-6">
        <Link href="/" className="flex items-center gap-3">
          <VLogo size={36} />
          <span
            className="font-mono font-black"
            style={{
              color: "var(--brand-cyan)",
              fontSize: "18px",
              letterSpacing: "0.2em",
            }}
          >
            VOQUENCE
          </span>
        </Link>
        <a
          href="https://x.com/voquenceapp"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono"
          style={{
            color: "var(--brand-muted)",
            fontSize: "12px",
            letterSpacing: "0.15em",
          }}
        >
          @VOQUENCEAPP
        </a>
      </nav>

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
          where we win, where we lose, and where each tool actually fits.
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
            Spokenly, Glaido, and Wispr Flow give you cleaner dictation. Voquence
            gives you finished content.
          </p>
          <p
            className="mt-4"
            style={{ color: "#bbbbbb", fontSize: "14px", lineHeight: 1.6 }}
          >
            They&apos;re great at turning your voice into text. Voquence is built
            for what you do next — turning that voice into a book description, a
            tweet thread, a polished email, a structured AI prompt. That&apos;s the
            actual product.
          </p>
        </div>
      </section>

      {/* Free tier comparison */}
      <section className="relative z-10 px-6 sm:px-12 mb-16 max-w-5xl mx-auto w-full">
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "20px",
            letterSpacing: "0.18em",
          }}
        >
          FREE TIER
        </h2>

        <div className="overflow-x-auto">
          <table
            className="w-full text-left"
            style={{ borderCollapse: "collapse", minWidth: "640px" }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid var(--brand-border)" }}>
                <Th>Feature</Th>
                <Th highlighted>Voquence</Th>
                <Th>Spokenly</Th>
                <Th>Glaido</Th>
                <Th>Wispr Flow</Th>
              </tr>
            </thead>
            <tbody>
              <Row label="Unlimited usage">
                <Cell>Yes (Local + BYOK)</Cell>
                <Cell>Yes (Local + BYOK)</Cell>
                <Cell>No — 2,000 words/wk cap</Cell>
                <Cell>No — ~2,000 words/wk cap</Cell>
              </Row>
              <Row label="Works offline">
                <Cell pending>Local Mode — Coming Soon</Cell>
                <Cell>Yes</Cell>
                <Cell>No</Cell>
                <Cell>No</Cell>
              </Row>
              <Row label="No API keys needed">
                <Cell pending>With Local Mode (Coming Soon)</Cell>
                <Cell>Yes (Local Mode)</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
              </Row>
              <Row label="BYOK option">
                <Cell>Yes — OpenAI + Anthropic</Cell>
                <Cell>Yes</Cell>
                <Cell>No</Cell>
                <Cell>No</Cell>
              </Row>
              <Row label="AI content modes (KDP, Tweet, Prompt, etc.)">
                <Cell>3 modes (BYOK)</Cell>
                <Cell>None</Cell>
                <Cell>Auto-formatting only</Cell>
                <Cell>None</Cell>
              </Row>
              <Row label="No credit card to start">
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
              </Row>
              <Row label="Works in any Mac app">
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
              </Row>
            </tbody>
          </table>
        </div>
      </section>

      {/* Paid tier comparison */}
      <section className="relative z-10 px-6 sm:px-12 mb-16 max-w-5xl mx-auto w-full">
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "20px",
            letterSpacing: "0.18em",
          }}
        >
          PAID TIER
        </h2>

        <div className="overflow-x-auto">
          <table
            className="w-full text-left"
            style={{ borderCollapse: "collapse", minWidth: "640px" }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid var(--brand-border)" }}>
                <Th>Feature</Th>
                <Th highlighted>Voquence Creator</Th>
                <Th>Spokenly Pro</Th>
                <Th>Glaido Pro</Th>
                <Th>Wispr Flow Pro</Th>
              </tr>
            </thead>
            <tbody>
              <Row label="Price">
                <Cell>$19/mo</Cell>
                <Cell>$9.99/mo</Cell>
                <Cell>$20/mo</Cell>
                <Cell>~$12/mo</Cell>
              </Row>
              <Row label="Unlimited dictation">
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
              </Row>
              <Row label="AI content modes">
                <Cell>10+ (KDP, Tweet, Prompt, Email, more)</Cell>
                <Cell>None</Cell>
                <Cell>None</Cell>
                <Cell>None</Cell>
              </Row>
              <Row label="Managed cloud (no API keys)">
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
                <Cell>Yes</Cell>
              </Row>
              <Row label="Custom modes / prompts">
                <Cell pending>v1.1 ship</Cell>
                <Cell>No</Cell>
                <Cell>Yes</Cell>
                <Cell>Limited</Cell>
              </Row>
              <Row label="Platforms">
                <Cell>Mac (Windows soon)</Cell>
                <Cell>Mac, iOS, Windows</Cell>
                <Cell>Mac, Web</Cell>
                <Cell>Mac, Windows, Web</Cell>
              </Row>
              <Row label="Custom dictionary">
                <Cell pending>v1.1 ship</Cell>
                <Cell>No</Cell>
                <Cell>No</Cell>
                <Cell>No</Cell>
              </Row>
            </tbody>
          </table>
        </div>
      </section>

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
              Local Mode isn&apos;t live yet.
            </strong>{" "}
            We&apos;re shipping it within ~1 week. Until then, the &ldquo;truly
            free no-setup&rdquo; tier belongs to Spokenly. If that&apos;s the only
            box you need ticked today, install Spokenly.
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
            Speak a rough idea — get back a book description, a tweet thread, a
            structured AI prompt, a polished email. Spokenly, Glaido, and Wispr
            Flow don&apos;t ship these modes. Voquence has 10+.
          </Win>
          <Win>
            <strong style={{ color: "#ffffff" }}>
              BYOK at zero markup.
            </strong>{" "}
            Bring your own OpenAI and Anthropic keys and pay only what your
            providers charge — usually about a dollar a month for normal use. No
            usage caps. Glaido and Wispr Flow don&apos;t offer this.
          </Win>
          <Win>
            <strong style={{ color: "#ffffff" }}>
              Built for the &ldquo;type for a living&rdquo; crowd.
            </strong>{" "}
            KDP authors, founders, content creators, prompt engineers. The modes
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
            Voquence is free to try with your own API keys. Takes 5 minutes.
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

      {/* Footer */}
      <footer
        className="relative z-10 border-t mt-auto"
        style={{ borderColor: "var(--brand-border)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <VLogo size={24} />
            <span
              className="font-mono"
              style={{
                color: "var(--brand-muted)",
                fontSize: "11px",
                letterSpacing: "0.12em",
              }}
            >
              VOQUENCE · v0.1.3
            </span>
          </Link>
          <div
            className="flex gap-6 font-mono text-xs"
            style={{ color: "var(--brand-muted)" }}
          >
            <a
              href="https://x.com/voquenceapp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ letterSpacing: "0.1em" }}
            >
              X / TWITTER
            </a>
            <a
              href="https://instagram.com/voquenceapp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ letterSpacing: "0.1em" }}
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </footer>
    </main>
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

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <tr style={{ borderBottom: "1px solid var(--brand-border)" }}>
      <td
        className="py-4 px-4"
        style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}
      >
        {label}
      </td>
      {children}
    </tr>
  );
}

function Cell({
  children,
  pending = false,
}: {
  children: React.ReactNode;
  pending?: boolean;
}) {
  return (
    <td
      className="py-4 px-4"
      style={{
        color: pending ? "#888888" : "#cccccc",
        fontSize: "13px",
        lineHeight: 1.5,
        fontStyle: pending ? "italic" : "normal",
      }}
    >
      {children}
    </td>
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
