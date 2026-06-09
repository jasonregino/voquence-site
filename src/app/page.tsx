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
          className="max-w-xl text-lg mb-6 leading-relaxed"
          style={{ color: "#cccccc" }}
        >
          Most dictation apps give you a transcript. Voquence turns your voice into
          finished business content. Book descriptions, tweet threads, AI prompts,
          tech support replies, pasted at your cursor in seconds.
        </p>

        <p
          className="max-w-xl text-base mb-12 leading-relaxed"
          style={{ color: "#aaaaaa" }}
        >
          Want it private and faster? Turn on Local Whisper — runs entirely on
          your Mac. Offline, no API key, no per-minute cost.
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
          APPLE SILICON · NOTARIZED · v0.3.1
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
            LOCAL WHISPER IS LIVE · GET NOTIFIED ON WINDOWS + NEW MODES
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

        {/* FREE TIER — one mode, fully offline, no keys */}
        <TierLabel
          tier="FREE — TRY VOQUENCE INSTANTLY"
          subhead="Raw Transcript runs fully offline with Local Whisper. No keys, no setup, no signup. Download and dictate in 60 seconds."
        />
        <div className="max-w-md mx-auto mb-16">
          <ModeExample
            mode="Raw Transcript"
            input="okay note to self the deal closes friday and we still need legal sign off on the indemnity clause"
            output="Okay, note to self: the deal closes Friday and we still need legal sign-off on the indemnity clause."
          />
        </div>

        {/* FOUNDING LICENSE — all polish + content modes, one-time */}
        <TierLabel
          tier="FOUNDING LICENSE — $19 ONE-TIME (FIRST 100)"
          subhead="11 polish + content modes. One purchase, own it forever."
        />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
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
            mode="Book Description"
            input="kids book about three friends in a magical treehouse whose window shows other worlds and they learn kindness is the real magic"
            output="When lightning hits their treehouse, Milo, Sophie, and Jay find its window shows worlds beyond their own. But the real magic is the kindness they bring back home..."
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
            input="spent six hours deep cleaning my home office this weekend and i feel like a new person honestly the mental reset is real"
            output="Just spent 6 hours deep cleaning my home office and wow, the mental reset is real. Feeling like a completely different human right now. If your space is chaotic, your mind follows. Highly recommend."
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
          <FoundingLicenseCard />
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
          Free dictation, no setup. One price unlocks all the polish + content modes. No subscription.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <PricingCard
            tier="Free"
            price="$0"
            priceSuffix="forever"
            tagline="The fast way to try Voquence."
            features={[
              "Raw Transcript mode",
              "Local Whisper transcription",
              "Works fully offline",
              "No account, no keys, no setup",
              "Unlimited usage",
            ]}
          />
          <PricingCard
            tier="Founding License"
            price="$19"
            priceSuffix="one-time"
            tagline="11 polish + content modes. Own it once."
            features={[
              "Everything in Free, plus:",
              "Clean Text, Eloquence (polish)",
              "Book Description, Tweet Thread, Tech Support, Email Draft, Founder Mode, Marketing Copy, Social Post, Prompt Builder, Poetry / Bars",
              "Bring your own Anthropic key — free $5 credit covers ~17,000 polishings",
              "Free updates forever on the v0.3 series",
            ]}
            highlighted
            comingSoon
            comingSoonLabel="FIRST 100 · THEN $29"
          />
          <PricingCard
            tier="Managed Cloud"
            price="$9.99"
            priceSuffix="per month"
            tagline="Same modes. No key needed. We handle the cloud."
            features={[
              "Everything in Founding License, plus:",
              "Managed Anthropic — no signup elsewhere",
              "No per-call thinking",
              "Cancel anytime",
              "Ships when the backend is built",
            ]}
            comingSoon
            comingSoonLabel="COMING SOON"
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
          NO RECURRING CHARGE · OWN IT ONCE
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
            a="Yes. Local Whisper is auto-installed when you finish Welcome (v0.3.0+) — transcription runs entirely on your Mac, nothing leaves your device. If you choose cloud transcription instead in Settings, your audio goes directly from your Mac to OpenAI's Whisper API using your own key. The polish + content modes send the transcript directly to Anthropic's Claude with your Anthropic key. Either way, Voquence the company never sees or stores any of it."
          />
          <FaqItem
            q="Do I need an account?"
            a="Not for the Free tier. Download Voquence, walk through Welcome, and Raw Transcript works immediately with no account. The Founding License unlock will require an email when it ships (so you can recover your license if you reinstall). Managed Cloud will require an account so we can run the subscription."
          />
          <FaqItem
            q="What's BYOK and what will the API cost me?"
            a="BYOK means Bring Your Own Keys. For the polish + content modes you create a free Anthropic account, paste your API key into Voquence Settings, and Voquence calls Claude directly with your key. New Anthropic accounts get $5 of free credit — that's roughly 17,000 polishings before you pay anything. After that, typical usage is about 8 cents a month. Less than a coffee. You can also keep using Raw Transcript for free without any keys at all."
          />
          <FaqItem
            q="How is Voquence different from Spokenly and Wispr Flow?"
            a="Spokenly and Wispr Flow are both solid dictation apps. They turn voice into a clean transcript fast. Voquence goes a step further: the same voice note becomes a polished tweet thread, book description, support reply, email draft, or one of nine ready-to-paste content modes total. If you want fast transcription, Spokenly and Wispr are great choices. If you want voice in and finished content out — saving the rewriting step entirely — that's where Voquence fits."
          />
          <FaqItem
            q="Will Voquence work in any Mac app?"
            a="Yes. Voquence pastes at your cursor wherever you are: Word, Pages, Notion, Slack, Google Docs in the browser, your code editor, your email client. Anywhere you can normally paste with Cmd+V, Voquence works."
          />
          <FaqItem
            q="What's the difference between Free and Founding License?"
            a="Free gives you Raw Transcript — fully offline, fully local, no keys, forever. Founding License (one-time $19 for the first 100 buyers, then $29) unlocks all 11 polish + content modes: Clean Text, Eloquence, Book Description, Tweet Thread, Tech Support, Email Draft, Founder Mode, Marketing Copy, Social Post, Prompt Builder, and Poetry / Bars. The polish + content modes need an Anthropic API key for the Claude step (free $5 credit covers about 17,000 polishings). One purchase, own it forever, free updates on the v0.3 series."
          />
          <FaqItem
            q="Why one-time pricing instead of a subscription?"
            a="Two reasons. One, Voquence is built by a solo developer (Jason) and runs entirely on your Mac — there's no server eating recurring infrastructure cost that justifies a recurring bill. Two, the dictation category is currently full of $10-$20/month subscriptions that frustrate users (Wispr Flow sits at 2.7/5 on Trustpilot partly because of this). VoiceInk, superwhisper, and MacWhisper all sell one-time licenses for the same model. We follow that lead. Pay once, own it. A Managed Cloud subscription is on the roadmap for users who'd rather pay $9.99/mo and not deal with an Anthropic key at all — but it's optional, not a replacement."
          />
          <FaqItem
            q="What's the Founding 100?"
            a="The first 100 Founding License purchases lock in at $19 forever. After 100 founding buyers are in, the price moves to $29 for everyone new — but founding members keep their $19 price for life. Founding members will also get a public credit on a launch page (optional, first names only if you want it). It's our way of saying thanks to the people who showed up first."
          />
          <FaqItem
            q="When does Local Whisper Mode ship?"
            a="Already shipped in v0.2.0 — that's what you download today. Local Whisper runs transcription on your Mac instead of OpenAI's servers. No API key needed for transcription, fully offline, zero per-minute cost. Download the model from Voquence Settings once it's installed."
          />
          <FaqItem
            q="What Mac do I need to run Voquence?"
            a="Apple Silicon (M1, M2, M3, M4, or newer) and macOS 11 (Big Sur) or later. That covers any Mac sold since November 2020. The Voquence app itself is about 4 MB; Local Whisper adds a one-time 141 MB model download during onboarding. Voquence does not run on Intel-based Macs."
          />
          <FaqItem
            q="What about Windows?"
            a="In active development. The Mac version is shipping and stable (v0.2.0 added Local Whisper, v0.2.1 added the install-location safety banner, v0.2.2 ships the DMG installer + clearer update errors, v0.3.0 auto-installs Local Whisper during the Welcome flow so no API keys are needed to get started, v0.3.1 adds a friendly in-app guard rail when you try a Claude-backed mode without a key). A Windows release is targeted for a few weeks out. Drop your email at the top of this page and you'll be the first to know the moment it's ready."
          />
          <FaqItem
            q="Why isn't Voquence on the Mac App Store?"
            a="Voquence pastes its output at your cursor in any app — TextEdit, Pages, Google Docs in the browser, Slack, Notion, your code editor. That requires the macOS Accessibility API. In late 2025 Apple started rejecting Mac App Store updates for dictation apps that use the Accessibility API to inject text (WhisperPad and others have been hit). Going App Store would either mean shipping a worse product that can't paste at your cursor, or building Voquence and waiting to find out if a future update gets rejected. Direct download is the honest path: you get the real product today, signed by Apple, notarized by Apple, distributed by Voquence directly. If you'd prefer App Store, fair — Spokenly is a solid choice with a more limited cursor-paste story."
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
        {highlighted && !comingSoon && (
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

/**
 * Closing card for the Founding License grid — sits in the 12th slot
 * (bottom-right) so the 11 mode-example cards plus this one form a clean
 * 4x3 grid instead of leaving an empty cell. Styled to match ModeExample
 * exactly (same outer chrome, same cyan border + halo, same header bar)
 * so it reads as part of the row, but the inner content is the value
 * recap + pricing math rather than a sample input/output.
 *
 * Intentionally NOT a button right now. The Founding License checkout
 * isn't wired (license-key system is item F2 on the launch punchlist).
 * A "Buy Now" link today would be a lie. When the checkout ships, this
 * component upgrades to a real CTA in the same layout — no card-shape
 * surgery required.
 */
function FoundingLicenseCard() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "var(--brand-surface)",
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
        <span>FOUNDING LICENSE</span>
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
          FIRST 100
        </span>
      </div>
      <div className="p-5 space-y-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span
              style={{
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              $19
            </span>
            <span
              className="font-mono"
              style={{
                color: "var(--brand-muted)",
                fontSize: "11px",
                letterSpacing: "0.1em",
              }}
            >
              ONE-TIME
            </span>
          </div>
          <p
            style={{
              color: "#aaaaaa",
              fontSize: "12px",
              lineHeight: 1.5,
              marginTop: "4px",
            }}
          >
            After the first 100 buyers, the price moves to $29 — license
            owners keep theirs forever.
          </p>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--brand-border)",
            paddingTop: "12px",
          }}
        >
          <p
            className="font-mono mb-2"
            style={{
              color: "var(--brand-cyan)",
              fontSize: "10px",
              letterSpacing: "0.18em",
            }}
          >
            WHAT YOU GET
          </p>
          <ul
            className="space-y-1.5"
            style={{ color: "#cccccc", fontSize: "13px", lineHeight: 1.45 }}
          >
            <li>All 11 polish + content modes above</li>
            <li>Free updates on the v0.3 series</li>
            <li>
              <span style={{ color: "#888" }}>
                Bring your Anthropic key (~8¢/mo, $5 free credit)
              </span>
            </li>
          </ul>
        </div>
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
        // Match the Founding License pricing card: lit cyan border + halo.
        // Radius is halved vs. Founding License (16px instead of 32px) because these
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
