import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const DOWNLOAD_URL =
  "https://voquence.com/releases/Voquence_0.2.1_aarch64.app.tar.gz";

export const metadata = {
  title: "Download Voquence",
  description:
    "Download Voquence for Mac. Voice into ready-to-paste content.",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

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
          VERSION 0.2.1 · APPLE SILICON (M1, M2, M3, M4) · NOTARIZED BY APPLE
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
              body="Drag Voquence.app from Downloads into your Applications folder. macOS doesn't show a progress bar. The drag itself IS the install. Launching from Downloads can cause permission issues, so if you skip this step Voquence now shows a banner on startup with a one-click fix."
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
              (the AI content modes)
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
              q="I dragged Voquence to Applications but I didn't see anything happen. Did it install?"
              a="Yes. macOS doesn't show a progress bar or wizard when you drag an app to Applications. The drag itself IS the install. Open your Applications folder and Voquence.app will be there. (A .dmg installer is rolling out shortly to make this a single step.)"
            />
            <Faq
              q="Where is Voquence after I double-clicked the downloaded file?"
              a="macOS automatically extracts Voquence.app into the same folder as the .tar.gz file, usually your Downloads folder. Look for the V icon. Drag that into Applications."
            />
            <Faq
              q="Can I just launch it from my Downloads folder?"
              a="Technically yes, but I don't recommend it. macOS keeps a 'quarantined' marker on files in Downloads that can make Accessibility permissions flaky. Drag to Applications first, then launch from there."
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
              q="Will there be a proper installer (.dmg / .pkg)?"
              a="A .dmg installer is built and rolling out shortly; for now the download is a .tar.gz archive that extracts the same app, just with one extra drag step. Free Local Mode already shipped in v0.2.0, so offline dictation with no API keys is available today — turn it on in Settings → Local Whisper."
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
