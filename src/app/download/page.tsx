import Link from "next/link";
import { VLogo } from "@/components/VLogo";

const DOWNLOAD_URL =
  "https://voquence.com/releases/Voquence_0.1.3_aarch64.app.tar.gz";

export const metadata = {
  title: "Download Voquence",
  description:
    "Download Voquence for Mac. Voice into ready-to-paste content.",
};

export default function DownloadPage() {
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
      <section className="relative z-10 px-6 sm:px-12 py-12 sm:py-20 max-w-3xl mx-auto w-full">
        <h1
          className="font-mono font-black mb-4"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(28px, 4vw, 40px)",
            letterSpacing: "0.18em",
          }}
        >
          DOWNLOAD VOQUENCE
        </h1>
        <p
          className="mb-10"
          style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
        >
          Voice into ready-to-paste content. Mac, Apple Silicon. ~3 MB download.
        </p>

        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-6 py-4 transition"
          style={{
            background: "var(--brand-cyan)",
            color: "#0a0a0a",
            fontSize: "14px",
            letterSpacing: "0.15em",
            boxShadow: "0 0 32px rgba(0, 212, 255, 0.25)",
          }}
        >
          ↓ DOWNLOAD FOR MAC
        </a>

        <p
          className="font-mono mt-3"
          style={{
            color: "var(--brand-muted)",
            fontSize: "11px",
            letterSpacing: "0.1em",
          }}
        >
          VERSION 0.1.3 · APPLE SILICON (M1, M2, M3, M4) · NOTARIZED BY APPLE
        </p>

        {/* Install steps */}
        <div className="mt-16">
          <h2
            className="font-mono font-black mb-6"
            style={{
              color: "var(--brand-cyan)",
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            INSTALL IN 4 STEPS
          </h2>

          <ol className="space-y-5">
            <Step
              n={1}
              title="Download"
              body="Click the button above. The file is a 3 MB .tar.gz archive."
            />
            <Step
              n={2}
              title="Extract"
              body="Double-click the downloaded file. macOS will automatically extract Voquence.app into your Downloads folder."
            />
            <Step
              n={3}
              title="Move to Applications"
              body="Drag Voquence.app into your Applications folder. This step matters — launching from anywhere else can cause permission issues."
            />
            <Step
              n={4}
              title="Launch"
              body="Open Applications, double-click Voquence. A Welcome screen will walk you through granting Microphone, Accessibility, and Apple Events permissions. All three are required for the paste-at-cursor magic."
            />
          </ol>
        </div>

        {/* BYOK setup */}
        <div className="mt-14">
          <h2
            className="font-mono font-black mb-4"
            style={{
              color: "var(--brand-cyan)",
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            ADD YOUR API KEYS
          </h2>
          <p
            className="mb-4"
            style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
          >
            Voquence runs on cloud AI today. Bring your own keys from OpenAI and
            Anthropic — both are free to sign up for, and a typical month of
            dictation costs about a dollar in API charges.
          </p>
          <ul
            className="space-y-2 mb-4"
            style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
          >
            <li>
              <span style={{ color: "var(--brand-cyan)" }}>·</span>{" "}
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--brand-cyan)" }}
              >
                OpenAI API key
              </a>{" "}
              (used for Whisper transcription)
            </li>
            <li>
              <span style={{ color: "var(--brand-cyan)" }}>·</span>{" "}
              <a
                href="https://console.anthropic.com/settings/keys"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--brand-cyan)" }}
              >
                Anthropic API key
              </a>{" "}
              (used for the AI content modes)
            </li>
          </ul>
          <p style={{ color: "#aaaaaa", fontSize: "13px", lineHeight: 1.6 }}>
            Paste both into Voquence → Settings → API Keys. That&apos;s it. Local
            Whisper mode (no keys required) is coming soon — sign up at{" "}
            <Link
              href="/"
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              voquence.com
            </Link>{" "}
            to be notified when it ships.
          </p>
        </div>

        {/* Troubleshooting */}
        <div className="mt-14 rounded-xl p-6" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}>
          <h3
            className="font-mono font-black mb-3"
            style={{
              color: "#aaaaaa",
              fontSize: "12px",
              letterSpacing: "0.18em",
            }}
          >
            RUNNING INTO TROUBLE?
          </h3>
          <p style={{ color: "#cccccc", fontSize: "13px", lineHeight: 1.6 }}>
            If macOS warns about Voquence being from an unidentified developer,
            right-click Voquence.app in Applications and choose Open. Voquence is
            signed and notarized by Apple, but Gatekeeper sometimes gets cautious on
            first launch. After the first open, it&apos;ll launch normally from then
            on.
          </p>
          <p
            className="mt-3"
            style={{ color: "#cccccc", fontSize: "13px", lineHeight: 1.6 }}
          >
            Still stuck? Reply to me on{" "}
            <a
              href="https://x.com/voquenceapp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              @voquenceapp
            </a>{" "}
            and I&apos;ll help directly.
          </p>
        </div>
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

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <div
        className="font-mono font-black flex-shrink-0 flex items-center justify-center rounded-full"
        style={{
          background: "var(--brand-cyan-dim)",
          color: "var(--brand-cyan)",
          width: "28px",
          height: "28px",
          fontSize: "13px",
        }}
      >
        {n}
      </div>
      <div>
        <h3
          className="font-bold mb-1"
          style={{ color: "#ffffff", fontSize: "15px" }}
        >
          {title}
        </h3>
        <p style={{ color: "#bbbbbb", fontSize: "14px", lineHeight: 1.6 }}>
          {body}
        </p>
      </div>
    </li>
  );
}
