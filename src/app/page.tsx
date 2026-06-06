import Link from "next/link";
import { VLogo } from "@/components/VLogo";
import { EmailSignup } from "@/components/EmailSignup";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

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
          APPLE SILICON · NOTARIZED · v0.1.5
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

        {/* FREE TIER — dictation modes (3) */}
        <TierLabel
          tier="FREE — BRING YOUR OWN KEYS"
          subhead="Three dictation modes. No subscription. About $1/month in API charges from OpenAI + Anthropic."
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <ModeExample
            mode="Raw Transcript"
            input="okay note to self the deal closes friday and we still need legal sign off on the indemnity clause"
            output="Okay, note to self: the deal closes Friday and we still need legal sign-off on the indemnity clause."
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
        </div>

        {/* CREATOR TIER — ready-to-paste content modes (8) */}
        <TierLabel
          tier="CREATOR — $19/MO"
          subhead="Everything in Free, plus eight ready-to-paste content modes. Voice in, finished content out."
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
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
            mode="Tech Support"
            input="customer's printer keeps jamming on every page after the second one they already tried restarting it"
            output="Hi, sorry the printer is acting up. Since a restart didn't fix it, let's check the paper path. Open the back panel and look for any small shreds in the rollers..."
          />
          <ModeExample
            mode="Email Draft"
            input="email to sarah letting her know the report is delayed two days because i'm waiting on data from finance"
            output="Hi Sarah, Quick heads up that the report will be two days late. I'm waiting on data from finance and should have everything by Thursday. I'll send it the moment it's ready. Thanks for your patience."
          />
          <ModeExample
            mode="Social Post"
            input="spent six hours cleaning my home office this weekend and i feel like a new person honestly"
            output="Spent 6 hours cleaning my home office this weekend. Feel like a new person. Clean space, clean head."
          />
          <ModeExample
            mode="Marketing Copy"
            input="we make a planner for adhd people who can't stick to traditional planners because they're too rigid"
            output="Most planners fail ADHD brains. They demand structure ADHD doesn't have. This one works WITH yours: flexible, visual, forgiving. No more empty Februarys. The first planner you'll actually finish."
          />
          <ModeExample
            mode="Founder Mode"
            input="okay q4 we're pivoting to b2b sarah's leading sales pricing is still tbd and i'm worried about churn"
            output={`Decisions made:\n- Pivot to B2B for Q4\n- Sarah leads sales\n\nOpen questions:\n- Pricing tier still TBD\n\nRisks:\n- Customer churn`}
          />
          <ModeExample
            mode="Poetry / Bars"
            input="been grinding on this project for six months and nobody knows"
            output={`Six months deep, nobody knows\nBuilding in the dark, that's how it goes\nThe work don't lie when silence stays\nThis is the grind, the long game days\nNo applause for the early hours\nJust me and the doubt and the late-night powers\nTrust the slow build, trust the climb\nThe receipts come due in their own time`}
            isNew
          />
        </div>

        {/* COMING SOON — v1.1 roadmap teasers */}
        <TierLabel
          tier="COMING SOON · v1.1"
          subhead="On the roadmap. Make your voice for what ships first."
        />
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <ModeTeaser
            mode="Custom Modes"
            description="Build your own modes. Train Voquence on your voice, your brand, your format. One person's tweet voice is not another's."
          />
          <ModeTeaser
            mode="Saved History"
            description="Every transcript saved, searchable, replayable. Find that line you said three weeks ago without rerecording."
          />
        </div>

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
            comingSoonLabel="SHIPS ~1 WEEK"
          />
          <PricingCard
            tier="Free (Your Keys)"
            price="$0"
            priceSuffix="to Voquence"
            tagline="For power users with their own API keys."
            features={[
              "Cloud transcription (Whisper)",
              "Clean Text, Eloquence, Raw modes",
              "Bring your own OpenAI + Anthropic keys",
              "Pay only what your APIs charge (about $1-3 a month)",
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
              "Managed cloud, zero setup",
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
          Other dictation apps give you a transcript. Voquence gives you finished content.{" "}
          <Link
            href="/compare"
            className="underline"
            style={{ color: "var(--brand-cyan)" }}
          >
            See the full comparison →
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 sm:px-12 py-16 sm:py-24" id="faq">
        <h2
          className="font-mono font-black text-center mb-3"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(20px, 3vw, 28px)",
            letterSpacing: "0.18em",
          }}
        >
          FREQUENTLY ASKED
        </h2>
        <p
          className="text-center mb-12 max-w-xl mx-auto"
          style={{ color: "var(--brand-muted)", fontSize: "15px" }}
        >
          The questions worth answering before you install.
        </p>

        <div className="max-w-3xl mx-auto space-y-3">
          <FaqItem
            q="Is my voice data private?"
            a="Yes. On the Free tier (Bring Your Own Keys), your audio goes directly from your Mac to OpenAI's Whisper API, and your transcript goes directly to Anthropic's Claude. Voquence the company never sees or stores either. When Local Whisper Mode ships in v0.2.0 (weeks not months), transcription runs entirely on your Mac — nothing leaves your device."
          />
          <FaqItem
            q="Do I need an account?"
            a="Not on Free. The Free tier works the moment you install Voquence and paste in your OpenAI and Anthropic API keys. No signup. No email required. Creator ($19/mo) requires an account so we can manage your subscription and let you skip the API key setup entirely."
          />
          <FaqItem
            q="What's BYOK and what will the API cost me?"
            a="BYOK means Bring Your Own Keys. You sign up for free accounts at OpenAI and Anthropic (both free to register), paste your API keys into Voquence Settings, and Voquence calls those services directly with your keys. A typical month of personal dictation costs about a dollar in API charges. Usually less than a coffee."
          />
          <FaqItem
            q="How is Voquence different from Spokenly and Wispr Flow?"
            a="Spokenly and Wispr Flow are both solid dictation apps. They turn voice into a clean transcript fast. Voquence goes a step further: the same voice note becomes a polished tweet thread, book description, support reply, email draft, or one of twelve other ready-to-paste content modes. If you want fast transcription, Spokenly and Wispr are great choices. If you want voice in and finished content out — saving the rewriting step entirely — that's where Voquence fits."
          />
          <FaqItem
            q="Will Voquence work in any Mac app?"
            a="Yes. Voquence pastes at your cursor wherever you are: Word, Pages, Notion, Slack, Google Docs in the browser, your code editor, your email client. Anywhere you can normally paste with Cmd+V, Voquence works."
          />
          <FaqItem
            q="What's the difference between Free and Creator?"
            a="Free gives you three dictation modes — Raw Transcript, Clean Text, and Eloquence — with BYOK (you bring your own API keys, you pay OpenAI and Anthropic directly). Creator at $19/month unlocks all nine ready-to-paste content modes (Book Description, Tweet Thread, Prompt Builder, Tech Support, Email Draft, Social Post, Marketing Copy, Founder Mode, Poetry / Bars), with managed cloud included so you skip the API key setup entirely."
          />
          <FaqItem
            q="When does Local Whisper Mode ship?"
            a="v0.2.0, weeks not months. Local Whisper runs transcription on your Mac instead of OpenAI's servers. No API key needed for transcription, fully offline, zero per-minute cost. It's the next major release after v0.1.5 (which is what you'd download today)."
          />
          <FaqItem
            q="What about Windows?"
            a="In active development. We're targeting a Windows release a few weeks after v0.2.0 ships on Mac. Drop your email at the top of this page and you'll be the first to know the moment it's ready."
          />
        </div>
      </section>

      <SiteFooter />
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
  comingSoonLabel = "COMING SOON",
}: {
  tier: string;
  price: string;
  priceSuffix: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  comingSoon?: boolean;
  comingSoonLabel?: string;
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
            {comingSoonLabel}
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
        // Match the Creator pricing card: lit cyan border + halo.
        // Radius is halved vs. Creator (16px instead of 32px) because these
        // cards sit in a tighter 3-column grid — a wider halo would bleed
        // into neighbors and muddy the look.
        border: "1px solid var(--brand-cyan)",
        boxShadow: "0 0 16px rgba(0, 212, 255, 0.18)",
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
          <p style={{ color: "#aaaaaa", fontSize: "14px", lineHeight: 1.55 }}>&ldquo;{input}&rdquo;</p>
        </div>
        <div>
          <div
            className="font-mono mb-2"
            style={{ color: "var(--brand-cyan)", fontSize: "10px", letterSpacing: "0.18em" }}
          >
            VOQUENCE GIVES YOU
          </div>
          <p style={{ color: "#dddddd", fontSize: "14px", lineHeight: 1.55, whiteSpace: "pre-line" }}>{output}</p>
        </div>
      </div>
    </div>
  );
}

function TierLabel({ tier, subhead }: { tier: string; subhead: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-8">
      <p
        className="font-mono font-black mb-2"
        style={{
          color: "var(--brand-cyan)",
          fontSize: "13px",
          letterSpacing: "0.22em",
        }}
      >
        {tier}
      </p>
      <p style={{ color: "#aaaaaa", fontSize: "14px", lineHeight: 1.55 }}>
        {subhead}
      </p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="group rounded-xl overflow-hidden"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
    >
      <summary
        className="cursor-pointer list-none px-5 py-4 flex items-center gap-4"
        style={{ color: "#ffffff" }}
      >
        <span
          className="font-mono font-black flex-shrink-0"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "18px",
            width: "16px",
            lineHeight: 1,
          }}
        >
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
        <span style={{ fontSize: "15px", fontWeight: 600, lineHeight: 1.4 }}>
          {q}
        </span>
      </summary>
      <div className="px-5 pb-5 pl-12">
        <p style={{ color: "#bbbbbb", fontSize: "14px", lineHeight: 1.65 }}>
          {a}
        </p>
      </div>
    </details>
  );
}

function ModeTeaser({
  mode,
  description,
}: {
  mode: string;
  description: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "var(--brand-surface)",
        // Intentionally muted vs. ModeExample so roadmap doesn't get
        // confused with shipping product: dim border, no cyan halo.
        border: "1px dashed var(--brand-border)",
      }}
    >
      <div
        className="font-mono px-5 py-3 flex items-center justify-between"
        style={{
          color: "var(--brand-muted)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          fontWeight: 800,
          borderBottom: "1px solid var(--brand-border)",
        }}
      >
        <span>{mode.toUpperCase()}</span>
        <span
          style={{
            color: "#a3a3a3",
            border: "1px solid #2a2a2a",
            borderRadius: "4px",
            padding: "1px 6px",
            fontSize: "9px",
            letterSpacing: "0.15em",
          }}
        >
          COMING SOON
        </span>
      </div>
      <div className="p-5">
        <p style={{ color: "#bbbbbb", fontSize: "14px", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
