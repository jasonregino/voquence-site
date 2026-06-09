import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const DOWNLOAD_URL =
  "https://voquence.com/releases/Voquence_0.3.2_aarch64.dmg";

export const metadata = {
  title: "Download Voquence",
  description:
    "Download Voquence for Mac. Voice into ready-to-paste content.",
};

export default async function DownloadPage({
  searchParams,
}: {
  searchParams: Promise<{ founder?: string }>;
}) {
  const params = await searchParams;
  const isFounder = params.founder === "1";

  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

      {isFounder && <FounderBanner />}

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
          Voice into ready-to-paste content. Mac, Apple Silicon. ~4 MB DMG.
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
          VERSION 0.3.2 · APPLE SILICON (M1, M2, M3, M4) · NOTARIZED BY APPLE
        </p>

        {/* Apple Silicon check — catches Intel Mac users before they hit a cryptic install error */}
        <details
          className="mt-4 inline-block"
          style={{ color: "var(--brand-muted)", fontSize: "12px" }}
        >
          <summary
            className="cursor-pointer"
            style={{ color: "var(--brand-cyan)" }}
          >
            Not sure if your Mac is Apple Silicon?
          </summary>
          <div
            className="mt-3 rounded-lg p-4"
            style={{
              background: "var(--brand-surface)",
              border: "1px solid var(--brand-border)",
              maxWidth: "560px",
              color: "#cccccc",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            <p className="mb-2">
              Click the Apple logo in the top-left corner of your Mac, then
              click <strong>About This Mac</strong>. Look for one of these:
            </p>
            <ul className="space-y-1 pl-5 list-disc">
              <li>
                <strong style={{ color: "#22c55e" }}>Chip Apple M1, M2, M3, or M4</strong>{" "}
                = Apple Silicon. Voquence will run.
              </li>
              <li>
                <strong style={{ color: "#ef4444" }}>Processor Intel...</strong>{" "}
                = Intel Mac. Voquence won&apos;t run on your machine yet.
              </li>
            </ul>
            <p className="mt-3" style={{ color: "#aaaaaa", fontSize: "12px" }}>
              Any Mac sold after November 2020 is Apple Silicon. Most Macs sold
              before that are Intel.
            </p>
          </div>
        </details>

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
            INSTALL IN 3 STEPS
          </h2>

          <ol className="space-y-5">
            <Step
              n={1}
              title="Download + open the DMG"
              body="Click the button above to download the 4 MB .dmg file, then double-click it. A small window opens showing the Voquence app icon next to a shortcut to your Applications folder."
            />
            <Step
              n={2}
              title="Drag Voquence into Applications"
              body="Inside the DMG window, drag the Voquence icon onto the Applications folder shortcut. That copies the app into /Applications/ in one move. After it copies, you can eject the DMG (right-click → Eject) and trash the .dmg file."
            />
            <Step
              n={3}
              title="Launch"
              body="Open Applications, double-click Voquence. A Welcome screen will walk you through three macOS permissions: Microphone (so Voquence can hear you), Accessibility (so it can paste at your cursor), and Apple Events (it just lets the app press Cmd+V for you when a transcription completes). All three are required for the paste-at-cursor magic."
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
            Voquence runs two ways. For fully offline dictation, turn on Local
            Whisper in Settings: transcription runs entirely on your Mac, no API
            key needed. For the cloud content modes (Book Description, Tweet
            Thread, and the rest), bring your own keys from OpenAI and
            Anthropic. Both are free to sign up for, and a typical month of
            cloud dictation costs about a dollar in API charges.
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
              (cloud Whisper transcription, optional if you turn on Local Whisper)
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
              (the AI content modes. New accounts get $5 free credit, about
              17,000 polishings before you pay anything)
            </li>
          </ul>
          <p style={{ color: "#aaaaaa", fontSize: "13px", lineHeight: 1.6 }}>
            Paste both into Voquence → Settings → API Keys. Prefer to stay
            offline? Open Settings → Local Whisper, download the model once
            (about 141 MB), and flip it on. Combined with Raw Transcript mode
            that&apos;s fully offline dictation: no keys, nothing leaving your Mac.
          </p>
        </div>

        {/* FAQ / Troubleshooting */}
        <div className="mt-14">
          <h2
            className="font-mono font-black mb-6"
            style={{
              color: "var(--brand-cyan)",
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            COMMON QUESTIONS
          </h2>

          <div className="space-y-5">
            <Faq
              q="I dragged Voquence onto the Applications shortcut. Did it install?"
              a="Yes. macOS doesn't show a progress bar or wizard when you drop an app onto Applications inside a DMG. The drop itself IS the copy. Open your Applications folder and Voquence.app will be there."
            />
            <Faq
              q="Can I just launch Voquence from inside the DMG window?"
              a="Technically yes, but don't. Apps run from a mounted DMG can't be updated and macOS often blocks Accessibility permissions on them. Drag Voquence onto the Applications shortcut first, eject the DMG, then launch from Applications."
            />
            <Faq
              q={"macOS says “Voquence can't be opened because Apple cannot check it for malicious software.”"}
              a="This is Gatekeeper being cautious on first launch. Voquence is signed and notarized by Apple, but you still need to approve it once. Right-click Voquence.app in Applications → choose Open → confirm. After that, it launches normally every time."
            />
            <Faq
              q="The Welcome screen didn't appear when I launched."
              a="Quit Voquence completely (Cmd+Q, or right-click the Dock icon → Quit). Then launch again from Applications. The Welcome screen should appear on first run."
            />
            <Faq
              q="How do I uninstall?"
              a="Drag Voquence.app from Applications to the Trash. If you want a full clean uninstall, also remove ~/Library/Application Support/Voquence (holds your API keys and settings)."
            />
          </div>

          <div
            className="mt-10 rounded-xl p-5"
            style={{
              background: "var(--brand-surface)",
              border: "1px solid var(--brand-border)",
            }}
          >
            <p style={{ color: "#cccccc", fontSize: "13px", lineHeight: 1.6 }}>
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
              and I&apos;ll help directly. Real human, not a bot.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function FounderBanner() {
  return (
    <section className="relative z-10 px-6 sm:px-12 pt-6 max-w-3xl mx-auto w-full">
      <div
        className="rounded-xl p-6"
        style={{
          background: "var(--brand-surface)",
          border: "1px solid var(--brand-cyan)",
          boxShadow: "0 0 32px rgba(0, 212, 255, 0.18)",
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
          WELCOME, FOUNDER
        </p>
        <h2
          className="font-bold mb-3"
          style={{
            color: "#ffffff",
            fontSize: "20px",
            lineHeight: 1.4,
          }}
        >
          You&apos;re in the Founding 100. Thank you.
        </h2>
        <p
          className="mb-3"
          style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
        >
          Your $19 price is locked in for life. Here&apos;s exactly what
          that buys you and when:
        </p>
        <ul
          className="space-y-2 mb-4 pl-5 list-disc"
          style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
        >
          <li>
            <strong style={{ color: "#ffffff" }}>Today:</strong> All 11 polish
            modes work via your own Anthropic key (free $5 credit covers
            ~17,000 polishings).
          </li>
          <li>
            <strong style={{ color: "#ffffff" }}>Within ~1-2 weeks:</strong>{" "}
            Managed Cloud ships. Free for Founders, no key needed. Public
            price will be $9.99/month.
          </li>
          <li>
            <strong style={{ color: "#ffffff" }}>When v0.4 ships:</strong>{" "}
            License enforcement turns on. Your founding membership keeps you
            in automatically.
          </li>
          <li>
            Plus: vote on the next mode, optional public credit on{" "}
            <a
              href="/founders"
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              voquence.com/founders
            </a>
            , direct line to Jason.
          </li>
        </ul>
        <p
          className="mb-1"
          style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
        >
          Next step: download Voquence below if you haven&apos;t already.
          Jason will send a personal thank-you email within 24 hours.
        </p>
        <p style={{ color: "#aaaaaa", fontSize: "13px", lineHeight: 1.6 }}>
          Questions? Reply to that email, or write directly to{" "}
          <a
            href="mailto:jason@voquence.com"
            className="underline"
            style={{ color: "var(--brand-cyan)" }}
          >
            jason@voquence.com
          </a>
          . I read every message.
        </p>
      </div>
    </section>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
    >
      <h3
        className="font-bold mb-2"
        style={{ color: "#ffffff", fontSize: "14px", lineHeight: 1.5 }}
      >
        {q}
      </h3>
      <p style={{ color: "#bbbbbb", fontSize: "13px", lineHeight: 1.6 }}>{a}</p>
    </div>
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
