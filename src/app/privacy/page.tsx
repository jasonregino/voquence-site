import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Privacy Policy — Voquence",
  description:
    "What data Voquence collects, what stays on your Mac, what flows to OpenAI and Anthropic, and how to reach us.",
};

const LAST_UPDATED = "2026-06-08";

export default function PrivacyPage() {
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
          PRIVACY POLICY
        </h1>
        <p
          className="font-mono mb-10"
          style={{
            color: "var(--brand-muted)",
            fontSize: "11px",
            letterSpacing: "0.1em",
          }}
        >
          LAST UPDATED · {LAST_UPDATED.toUpperCase()}
        </p>

        <Block>
          <p>
            This is the plain-English version of how Voquence handles your data.
            It says exactly what leaves your Mac, what stays on it, and who can
            see it. If anything is unclear, email{" "}
            <Mail />{" "}and Jason will answer directly.
          </p>
        </Block>

        <H2>The short version</H2>
        <Block>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              <strong>Local Whisper mode:</strong> nothing leaves your Mac. Your
              voice is transcribed on-device. Voquence the company never sees
              your audio or your transcript.
            </li>
            <li>
              <strong>Cloud mode (Bring Your Own Keys):</strong> your audio goes
              from your Mac to OpenAI&apos;s Whisper API using your OpenAI key.
              Your transcript goes to Anthropic&apos;s Claude using your
              Anthropic key. Voquence the company never sees either.
            </li>
            <li>
              <strong>API keys:</strong> currently stored on your Mac in a local
              JSON config file. Migration to the macOS Keychain is upcoming
              (v0.3.x). Either way, your keys live only on your machine.
            </li>
            <li>
              <strong>App usage data:</strong> the Voquence app collects nothing.
              No analytics, no telemetry, no &ldquo;phone home&rdquo; pings.
            </li>
            <li>
              <strong>Website (voquence.com):</strong> uses Google Analytics 4
              for page views and download counts. No personal data is collected
              by us beyond what GA4 standardly sees (anonymous browser/region
              info).
            </li>
            <li>
              <strong>Email signups:</strong> if you enter your email in our
              wishlist form, we store it in Resend to send you launch
              announcements. You can ask us to delete it anytime.
            </li>
          </ul>
        </Block>

        <H2>Who runs Voquence</H2>
        <Block>
          <p>
            Voquence is built and maintained by Jason Regino, a solo indie
            developer in California. There is no corporate parent. There is no
            data team. When you email{" "}<Mail />{" "}a human reads it.
          </p>
        </Block>

        <H2>What Voquence the app does with your voice</H2>
        <Block>
          <p>
            Voquence runs in two modes. Choose either, switch any time, in the
            Settings panel.
          </p>

          <H3>Local Whisper (recommended, fully offline)</H3>
          <p>
            When you turn on Local Whisper in Settings, Voquence downloads
            OpenAI&apos;s open-source Whisper model to your Mac (about 141 MB,
            one-time). After that, every voice recording is transcribed
            on-device using that model. The audio is captured by your microphone,
            held briefly in memory, passed to whisper.cpp, and discarded. None
            of it leaves your Mac. Voquence the company has no servers in this
            path and no way to see what you said.
          </p>

          <H3>Cloud (Bring Your Own Keys)</H3>
          <p>
            When Local Whisper is off, Voquence sends your recorded audio
            directly from your Mac to OpenAI&apos;s Whisper API, using the
            OpenAI API key you pasted into Settings. The resulting transcript
            is then sent directly from your Mac to Anthropic&apos;s Claude API
            (using your Anthropic key) so it can be processed by the mode you
            picked &mdash; Clean Text, Tweet Thread, Book Description, and so
            on. The polished result comes back and is pasted at your cursor.
          </p>
          <p>
            In cloud mode, OpenAI and Anthropic see your audio and your
            transcript under the terms of their own privacy policies and data
            retention rules (linked below). Voquence the company is not on the
            wire. Your keys give you a direct line to those providers; we are
            not a proxy.
          </p>
        </Block>

        <H2>Where your API keys live</H2>
        <Block>
          <p>
            As of v0.3.1 (current), your OpenAI and Anthropic API keys are
            stored on your Mac in a local JSON file at{" "}
            <code style={{ color: "#ddd", fontSize: "12px" }}>
              ~/Library/Application Support/voquence/config.json
            </code>
            . The file is readable only by your macOS user account by default.
            On a FileVault-encrypted Mac (the macOS default since Big Sur),
            it&apos;s encrypted at rest.
          </p>
          <p>
            We are migrating API key storage to the macOS Keychain in v0.3.x.
            The Keychain is the correct long-term home for credentials on Mac.
            When that ships, the migration will run once on update: your keys
            move into Keychain, and the JSON file is cleared.
          </p>
          <p>
            You can avoid writing keys to disk entirely by setting{" "}
            <code style={{ color: "#ddd", fontSize: "12px" }}>OPENAI_API_KEY</code>{" "}
            and{" "}
            <code style={{ color: "#ddd", fontSize: "12px" }}>
              ANTHROPIC_API_KEY
            </code>{" "}
            as environment variables. Voquence reads them on launch if the
            config file is empty.
          </p>
        </Block>

        <H2>What macOS permissions Voquence uses (and doesn&apos;t)</H2>
        <Block>
          <p>
            Voquence asks for three macOS permissions during onboarding. Each
            does exactly one thing.
          </p>
          <ul className="space-y-3 pl-5 list-disc">
            <li>
              <strong>Microphone</strong> &mdash; captures your voice during
              recording. Voquence only listens between the moment you press the
              hotkey and the moment you press it again. The mic is off at all
              other times.
            </li>
            <li>
              <strong>Accessibility</strong> &mdash; lets Voquence paste its
              output at your cursor in any app. Apple&apos;s Accessibility API
              is the only sanctioned way to do this on Mac. Voquence uses it to{" "}
              <em>send</em> a paste keystroke. It does not read other apps&apos;
              text, watch your typing, or take screenshots.
            </li>
            <li>
              <strong>Apple Events</strong> &mdash; required for the Cmd+V paste
              simulation to work in some apps. Voquence triggers a single
              keystroke event when a transcription completes. Nothing else.
            </li>
          </ul>
          <p>
            Voquence does not take screenshots of your screen, read the
            contents of other apps&apos; windows, log your keystrokes, or watch
            your clipboard. (For comparison: another Mac dictation app
            was found taking periodic screenshots of the active window for AI
            &ldquo;context.&rdquo; Voquence does nothing of the kind, by design.)
          </p>
        </Block>

        <H2>What voquence.com (the website) collects</H2>
        <Block>
          <p>
            The Voquence app collects nothing. The website (voquence.com) uses
            Google Analytics 4 to count page views, download clicks, and
            referrers. This helps Jason know whether his marketing is working.
            GA4 sees what it standardly sees: anonymous browser and region
            information, no personal identifiers.
          </p>
          <p>
            If you enter your email address into the wishlist form on the
            homepage, we store it in our Resend account to send you launch
            announcements. We do not share or sell email addresses. Email{" "}
            <Mail />{" "}and we&apos;ll delete yours within a day.
          </p>
          <p>
            voquence.com is hosted on Vercel. Vercel logs HTTP requests at the
            edge as part of normal site operation. Those logs are retained per
            Vercel&apos;s standard policy and we do not access them except for
            debugging.
          </p>
        </Block>

        <H2>Third-party services we use</H2>
        <Block>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              <strong>OpenAI</strong> &mdash; only if you turn on cloud mode and
              add your OpenAI API key. Audio is sent directly from your Mac to
              OpenAI using your key. See{" "}
              <a
                href="https://openai.com/policies/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--brand-cyan)" }}
              >
                OpenAI&apos;s privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Anthropic</strong> &mdash; only for the content modes that
              call Claude, and only with your Anthropic key. See{" "}
              <a
                href="https://www.anthropic.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--brand-cyan)" }}
              >
                Anthropic&apos;s privacy policy
              </a>
              .
            </li>
            <li>
              <strong>Google Analytics 4</strong> &mdash; on voquence.com only.
              Page views and download counts.
            </li>
            <li>
              <strong>Resend</strong> &mdash; only if you enter your email in
              the wishlist form. Used for launch announcements.
            </li>
            <li>
              <strong>Vercel</strong> &mdash; hosts the voquence.com website
              and serves the auto-updater endpoint.
            </li>
            <li>
              <strong>Hugging Face</strong> &mdash; hosts the Whisper model
              file. When Local Whisper mode downloads the model the first time,
              it pulls the 141 MB file from huggingface.co. No personal data is
              sent.
            </li>
          </ul>
        </Block>

        <H2>Children</H2>
        <Block>
          <p>
            Voquence is not directed at children under 13 and we do not
            knowingly collect personal information from them.
          </p>
        </Block>

        <H2>Your rights</H2>
        <Block>
          <p>
            You can ask us to delete any data we hold about you (mainly:
            wishlist email address) at any time by emailing{" "}<Mail />. We&apos;ll
            confirm deletion within a few business days.
          </p>
          <p>
            If you&apos;re in the EU/UK, you have rights under GDPR/UK GDPR
            including the right to access, correct, delete, and port your data.
            Email{" "}<Mail />{" "}to exercise any of these.
          </p>
        </Block>

        <H2>Changes to this policy</H2>
        <Block>
          <p>
            We&apos;ll update this page if how Voquence handles your data
            changes. The &ldquo;last updated&rdquo; date at the top will move,
            and we&apos;ll note significant changes in the changelog and in
            release notes inside the app.
          </p>
        </Block>

        <H2>Contact</H2>
        <Block>
          <p>
            Email{" "}<Mail />. A real human (Jason) reads every message. Replies
            come back as &ldquo;Jason from Voquence&rdquo; from the same
            address.
          </p>
        </Block>
      </section>

      <SiteFooter />
    </main>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-mono font-black mt-10 mb-3"
      style={{
        color: "var(--brand-cyan)",
        fontSize: "14px",
        letterSpacing: "0.18em",
      }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-5 mb-2"
      style={{
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: 700,
      }}
    >
      {children}
    </h3>
  );
}

function Block({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="space-y-3"
      style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.7 }}
    >
      {children}
    </div>
  );
}

function Mail() {
  return (
    <a
      href="mailto:support@voquence.com"
      className="underline"
      style={{ color: "var(--brand-cyan)" }}
    >
      support@voquence.com
    </a>
  );
}
