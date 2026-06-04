import Link from "next/link";
import { VLogo } from "@/components/VLogo";
import { EmailSignup } from "@/components/EmailSignup";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      {/* Top nav */}
      <nav className="relative z-10 flex justify-between items-center px-6 sm:px-12 py-6">
        <div className="flex items-center gap-3">
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
        </div>
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
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-24">
        <div className="mb-8">
          <VLogo size={120} />
        </div>

        <h1
          className="font-mono font-black tracking-widest mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(36px, 6vw, 64px)",
            letterSpacing: "0.18em",
            lineHeight: 1,
          }}
        >
          VOQUENCE
        </h1>

        <p
          className="font-mono mb-8"
          style={{
            color: "var(--brand-muted)",
            fontSize: "clamp(13px, 1.6vw, 15px)",
            letterSpacing: "0.15em",
          }}
        >
          SPEAK ROUGH IDEAS. GET POLISHED OUTPUT.
        </p>

        <p
          className="max-w-xl text-lg mb-12 leading-relaxed"
          style={{ color: "#cccccc" }}
        >
          Most dictation apps give you a transcript. Voquence turns your voice into
          finished business content. Book descriptions, tweet threads, AI prompts,
          tech support replies, pasted at your cursor in seconds.
        </p>

        <Link
          href="/download"
          className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-7 py-4 transition mb-6"
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

        <p
          className="font-mono mb-8"
          style={{
            color: "var(--brand-muted)",
            fontSize: "10px",
            letterSpacing: "0.1em",
          }}
        >
          APPLE SILICON · NOTARIZED · v0.1.3
        </p>

        <div
          className="w-full max-w-md mx-auto pt-6"
          style={{ borderTop: "1px solid var(--brand-border)" }}
        >
          <p
            className="font-mono mb-3"
            style={{
              color: "var(--brand-muted)",
              fontSize: "11px",
              letterSpacing: "0.15em",
            }}
          >
            OR GET NOTIFIED WHEN LOCAL MODE SHIPS
          </p>
          <EmailSignup />
        </div>
      </section>

      {/* What it does */}
      <section className="relative z-10 px-6 sm:px-12 py-16 sm:py-24">
        <h2
          className="font-mono font-black text-center mb-3"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(20px, 3vw, 28px)",
            letterSpacing: "0.18em",
          }}
        >
          HOW IT WORKS
        </h2>
        <p
          className="text-center mb-16 max-w-xl mx-auto"
          style={{ color: "var(--brand-muted)", fontSize: "15px" }}
        >
          Hit a hotkey. Speak naturally. The polished output pastes right at your cursor.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
          <ModeExample
            mode="Book Description"
            input="book about lifting for guys over 40 who feel tired and weak. thirty day plan. food sleep stress."
            output="You're not getting old, your testosterone is crashing. Inside, you'll learn how to reverse the signs of aging in 30 days through nutrition, training, and recovery..."
          />
          <ModeExample
            mode="Tweet Thread"
            input="sean loves to eat corn dogs"
            output="1/ Sean's got a thing for corn dogs. Not just any snack. This is a lifestyle choice. 2/ Most people eat corn dogs at the fair. Sean eats them on a Tuesday at 2pm like it's a spiritual practice..."
          />
          <ModeExample
            mode="Prompt Builder"
            input="coloring book about a fish in an aquarium bold and easy with text at the top saying the fish name"
            output="You are a children's coloring book illustrator. Create a single coloring book page featuring an aquarium scene with bold, thick black outlines suitable for coloring..."
          />
          <ModeExample
            mode="Clean Text"
            input="uh so like basically the meeting is at three pm tomorrow and um we need to bring the slides and the demo and you know the budget thing too"
            output="The meeting is at 3pm tomorrow. Bring the slides, the demo, and the budget."
          />
          <ModeExample
            mode="Eloquence"
            input="lifting heavy weights is a good way to get stronger and feel better about yourself"
            output="Lift heavy. Get stronger. Feel better. Repeat."
          />
          <ModeExample
            mode="Tech Support"
            input="customer's printer keeps jamming on every page after the second one they already tried restarting it"
            output="Hi — sorry the printer is acting up. Since a restart didn't fix it, let's check the paper path. Open the back panel and look for any small shreds in the rollers..."
            isNew
          />
        </div>

        {/* Footer note about additional modes */}
        <p
          className="text-center font-mono"
          style={{
            color: "var(--brand-muted)",
            fontSize: "12px",
            letterSpacing: "0.1em",
            marginTop: "8px",
          }}
        >
          PLUS RAW TRANSCRIPT · MORE MODES COMING SOON
        </p>
        <p
          className="text-center max-w-xl mx-auto mt-4"
          style={{ color: "var(--brand-muted)", fontSize: "14px" }}
        >
          Or use Clean Text mode for fast, polished dictation when that&apos;s all you need.
        </p>

        {/* Audience strip */}
        <p
          className="text-center max-w-2xl mx-auto mt-16"
          style={{ color: "#aaaaaa", fontSize: "15px", lineHeight: 1.6 }}
        >
          Made for indie creators, authors, founders, devs, and professionals who&apos;d
          rather speak once than rewrite three times.
        </p>
      </section>

      {/* Pricing */}
      <section className="relative z-10 px-6 sm:px-12 py-16 sm:py-24" id="pricing">
        <h2
          className="font-mono font-black text-center mb-3"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(20px, 3vw, 28px)",
            letterSpacing: "0.18em",
          }}
        >
          PRICING
        </h2>
        <p
          className="text-center mb-16 max-w-xl mx-auto"
          style={{ color: "var(--brand-muted)", fontSize: "15px" }}
        >
          Free local dictation, no setup. Pay only when you want finished content.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <PricingCard
            tier="Free Local"
            price="$0"
            priceSuffix="forever"
            tagline="The fast way to try Voquence."
            features={[
              "Local Whisper transcription",
              "Works offline",
              "Raw text at your cursor",
              "No account, no keys, no setup",
              "Unlimited usage",
            ]}
            comingSoon
          />
          <PricingCard
            tier="Free BYOK"
            price="$0"
            priceSuffix="to Voquence"
            tagline="For power users with their own API keys."
            features={[
              "Cloud transcription (Whisper)",
              "Clean Text, Eloquence, Raw modes",
              "Bring your own OpenAI + Anthropic keys",
              "Pay only what your APIs charge (~$1-3/mo)",
              "Unlimited usage",
            ]}
          />
          <PricingCard
            tier="Creator"
            price="$19"
            priceSuffix="per month"
            tagline="The ready-to-paste content tier."
            features={[
              "Everything in Free, plus:",
              "Book Description, Tweet Thread, Prompt Builder",
              "Tech Support, Email Draft, more",
              "Managed cloud — zero setup",
              "Custom modes + history (v1.1)",
            ]}
            highlighted
          />
        </div>

        <p
          className="text-center font-mono mt-12"
          style={{
            color: "var(--brand-muted)",
            fontSize: "12px",
            letterSpacing: "0.1em",
          }}
        >
          NO CREDIT CARD REQUIRED · CANCEL ANYTIME
        </p>

        <p
          className="text-center max-w-xl mx-auto mt-6"
          style={{ color: "var(--brand-muted)", fontSize: "13px" }}
        >
          Spokenly and Glaido give you cleaner dictation. Voquence gives you finished content.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t mt-auto" style={{ borderColor: "var(--brand-border)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <VLogo size={24} />
            <span
              className="font-mono"
              style={{ color: "var(--brand-muted)", fontSize: "11px", letterSpacing: "0.12em" }}
            >
              VOQUENCE · v1.0 LAUNCHING SOON
            </span>
          </div>
          <div className="flex gap-6 font-mono text-xs" style={{ color: "var(--brand-muted)" }}>
            <a href="https://x.com/voquenceapp" target="_blank" rel="noopener noreferrer" style={{ letterSpacing: "0.1em" }}>
              X / TWITTER
            </a>
            <a href="https://instagram.com/voquenceapp" target="_blank" rel="noopener noreferrer" style={{ letterSpacing: "0.1em" }}>
              INSTAGRAM
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PricingCard({
  tier,
  price,
  priceSuffix,
  tagline,
  features,
  highlighted = false,
  comingSoon = false,
}: {
  tier: string;
  price: string;
  priceSuffix: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  comingSoon?: boolean;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "var(--brand-surface)",
        border: highlighted
          ? "1px solid var(--brand-cyan)"
          : "1px solid var(--brand-border)",
        boxShadow: highlighted ? "0 0 32px rgba(0, 212, 255, 0.18)" : "none",
      }}
    >
      <div
        className="font-mono px-6 py-3 flex items-center justify-between"
        style={{
          color: highlighted ? "var(--brand-cyan)" : "var(--brand-muted)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          fontWeight: 800,
          borderBottom: "1px solid var(--brand-border)",
        }}
      >
        <span>{tier.toUpperCase()}</span>
        {highlighted && (
          <span style={{ fontSize: "9px", letterSpacing: "0.15em" }}>
            MOST POPULAR
          </span>
        )}
        {comingSoon && (
          <span
            style={{
              color: "#a3a3a3",
              border: "1px solid #2a2a2a",
              borderRadius: "4px",
              padding: "1px 8px",
              fontSize: "9px",
              letterSpacing: "0.15em",
            }}
          >
            COMING SOON
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span
              style={{
                color: "#ffffff",
                fontSize: "36px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {price}
            </span>
            <span
              className="font-mono"
              style={{
                color: "var(--brand-muted)",
                fontSize: "11px",
                letterSpacing: "0.1em",
              }}
            >
              {priceSuffix}
            </span>
          </div>
          <p
            className="mt-2"
            style={{ color: "#bbbbbb", fontSize: "13px", lineHeight: 1.5 }}
          >
            {tagline}
          </p>
        </div>
        <ul className="space-y-2 flex-1">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-2"
              style={{ color: "#cccccc", fontSize: "13px", lineHeight: 1.5 }}
            >
              <span style={{ color: "var(--brand-cyan)", fontSize: "12px", marginTop: "2px" }}>
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ModeExample({
  mode,
  input,
  output,
  isNew = false,
}: {
  mode: string;
  input: string;
  output: string;
  isNew?: boolean;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
    >
      <div
        className="font-mono px-5 py-3 flex items-center justify-between"
        style={{
          color: "var(--brand-cyan)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          fontWeight: 800,
          borderBottom: "1px solid var(--brand-border)",
        }}
      >
        <span>{mode.toUpperCase()}</span>
        {isNew && (
          <span
            style={{
              color: "#22c55e",
              border: "1px solid #22c55e",
              borderRadius: "4px",
              padding: "1px 6px",
              fontSize: "9px",
              letterSpacing: "0.15em",
            }}
          >
            NEW
          </span>
        )}
      </div>
      <div className="p-5 space-y-4">
        <div>
          <div
            className="font-mono mb-2"
            style={{ color: "var(--brand-muted)", fontSize: "10px", letterSpacing: "0.18em" }}
          >
            YOU SAY
          </div>
          <p style={{ color: "#aaaaaa", fontSize: "13px", lineHeight: 1.5 }}>&ldquo;{input}&rdquo;</p>
        </div>
        <div>
          <div
            className="font-mono mb-2"
            style={{ color: "var(--brand-cyan)", fontSize: "10px", letterSpacing: "0.18em" }}
          >
            VOQUENCE GIVES YOU
          </div>
          <p style={{ color: "#dddddd", fontSize: "13px", lineHeight: 1.5 }}>{output}</p>
        </div>
      </div>
    </div>
  );
}
