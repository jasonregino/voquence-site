import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Wispr Flow Alternative · Voquence",
  description:
    "Looking to switch from Wispr Flow? Voquence runs locally, costs $19 one-time, and turns your voice into finished content instead of a transcript.",
  openGraph: {
    title: "A Wispr Flow Alternative That Runs On Your Mac.",
    description:
      "Local-first, one-time $19, and it turns your voice into finished content instead of a transcript. Free to download.",
    url: "https://voquence.com/wispr-flow-alternative",
    siteName: "Voquence",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Wispr Flow Alternative That Runs On Your Mac.",
    description:
      "Local-first, one-time $19, and it turns your voice into finished content instead of a transcript. Free to download.",
  },
};

export default function WisprFlowAlternativePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

      {/* Hero */}
      <section className="relative z-10 px-6 sm:px-12 pt-8 pb-12 max-w-3xl mx-auto w-full">
        <h1
          className="font-mono font-black mb-4"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(28px, 4vw, 40px)",
            letterSpacing: "0.18em",
          }}
        >
          WISPR FLOW ALTERNATIVE
        </h1>
        <p
          className="max-w-2xl mb-10"
          style={{ color: "#cccccc", fontSize: "16px", lineHeight: 1.6 }}
        >
          If you came here from Wispr Flow, you probably have one of three
          complaints. Voquence is a Mac dictation app built around those exact
          three gaps. No subscription, your keys never leave your Mac, and the
          output is finished content, not raw transcript.
        </p>

        {/* The one-liner — matches Honest Comparison's hero card */}
        <div
          className="rounded-xl p-8 mb-10"
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
            A local-first, one-time-payment alternative to Wispr Flow.
          </p>
          <p
            className="mt-4"
            style={{ color: "#bbbbbb", fontSize: "14px", lineHeight: 1.6 }}
          >
            Wispr Flow runs in the cloud on a $144/year subscription and stops
            at the transcript. Voquence runs on your Mac, costs $19 one-time,
            and turns voice into finished content across 11 modes.
          </p>
        </div>

        <Link
          href="/download"
          className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-6 py-4 transition"
          style={{
            background: "var(--brand-cyan)",
            color: "#0a0a0a",
            fontSize: "14px",
            letterSpacing: "0.15em",
            boxShadow: "0 0 32px rgba(0, 212, 255, 0.25)",
          }}
        >
          ↓ DOWNLOAD VOQUENCE FREE
        </Link>
        <p
          className="font-mono mt-3"
          style={{
            color: "var(--brand-muted)",
            fontSize: "11px",
            letterSpacing: "0.1em",
          }}
        >
          MAC · APPLE SILICON · NO ACCOUNT · NO CREDIT CARD
        </p>
      </section>

      {/* The three complaints */}
      <section className="relative z-10 px-6 sm:px-12 pb-12 max-w-3xl mx-auto w-full">
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "16px",
            letterSpacing: "0.18em",
          }}
        >
          THE THREE COMPLAINTS
        </h2>

        <ComplaintCard
          n={1}
          complaint="My voice is going to the cloud."
          detail="Wispr Flow is cloud-only. Audio leaves your Mac, hits their servers, and comes back as text. If you dictate client notes, medical info, draft business strategy, or anything you would not paste into a stranger's chat window, that is a real concern."
          answer="Voquence ships with a local Whisper option. Turn it on in Settings and transcription runs entirely on your Mac. Nothing leaves the device. Combine it with Raw Transcript mode for fully offline dictation with no keys at all."
        />

        <ComplaintCard
          n={2}
          complaint="$144 a year, and it gets worse after you pay."
          detail="Wispr Flow runs $12 to $15 per month. That is $144 to $180 a year, forever. Trustpilot sits in the mid-2s out of 5 with a recurring theme: users say the app feels great during the free trial and degrades once they are paying."
          answer="Voquence's Founding License is a one-time $19 for the first 100 buyers, then $29 after. Pay once. You own it. No renewal, no surprise charge twelve months from now. Checkout opens shortly. For now the app is a free download, and you can run Raw Transcript with Local Whisper at no cost while the license goes live."
        />

        <ComplaintCard
          n={3}
          complaint="It gives me a transcript. I still have to rewrite it."
          detail="Wispr Flow does one job well: voice in, text out. But you still have to turn that text into a tweet thread, a polished email, a book description, a support reply. That is where most of the real time goes."
          answer="Voquence has 11 finished-output modes. Speak rough thoughts, get back a structured tweet thread, a tightened email, a book description that follows the Amazon format, a clean AI prompt, a social post in your voice. The rewriting step is the product, not your homework after dictation. The content modes call Claude with your own Anthropic key, so that step uses the cloud, but your transcription can stay fully local, and Voquence the company never sees any of it."
        />
      </section>

      {/* Quick comparison */}
      <section className="relative z-10 px-6 sm:px-12 pb-12 max-w-3xl mx-auto w-full">
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "16px",
            letterSpacing: "0.18em",
          }}
        >
          SIDE BY SIDE
        </h2>

        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
          }}
        >
          <CompareRow label="Price" voq="$19 one-time (first 100), then $29" wispr="$12 to $15 per month" />
          <CompareRow label="Where audio goes" voq="On your Mac with Local Whisper" wispr="Their cloud servers" />
          <CompareRow label="Output" voq="Raw transcript + 11 finished-content modes" wispr="Raw transcript" />
          <CompareRow label="API keys" voq="Bring your own (OpenAI + Anthropic) or use Local Whisper for free" wispr="Built in, you cannot swap" />
          <CompareRow label="Platforms" voq="Mac (Apple Silicon)" wispr="Mac, Windows, iPhone, Android" last />
        </div>
      </section>

      {/* Honest gaps */}
      <section className="relative z-10 px-6 sm:px-12 pb-12 max-w-3xl mx-auto w-full">
        <h2
          className="font-mono font-black mb-6"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "16px",
            letterSpacing: "0.18em",
          }}
        >
          WHERE WISPR FLOW STILL WINS
        </h2>

        <div
          className="rounded-xl p-6"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
          }}
        >
          <p
            className="mb-4"
            style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}
          >
            Not going to pretend Voquence beats Wispr Flow on everything. Two
            honest gaps right now:
          </p>
          <ul className="space-y-3 pl-5 list-disc" style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}>
            <li>
              <strong style={{ color: "#ffffff" }}>Windows.</strong> Wispr Flow
              runs on Windows. Voquence is Mac only for v1. Windows is on the
              roadmap, but not soon.
            </li>
            <li>
              <strong style={{ color: "#ffffff" }}>Custom vocabulary.</strong>{" "}
              Neither tool currently has a great editable custom dictionary
              for names, jargon, or pen names. Voquence is building one for
              v0.4. If you need it today, neither of us is the answer.
            </li>
          </ul>
          <p
            className="mt-4"
            style={{ color: "#aaaaaa", fontSize: "13px", lineHeight: 1.6 }}
          >
            If those two things are dealbreakers, stay where you are. If they
            are not, Voquence is free to download. Try it today, decide
            tomorrow.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 sm:px-12 pb-20 max-w-3xl mx-auto w-full">
        <div
          className="rounded-xl p-8 text-center"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-cyan)",
            boxShadow: "0 0 32px rgba(0, 212, 255, 0.15)",
          }}
        >
          <h2
            className="font-mono font-black mb-3"
            style={{
              color: "#ffffff",
              fontSize: "22px",
              letterSpacing: "0.05em",
            }}
          >
            Try the free tier. No account, no card.
          </h2>
          <p
            className="mb-6"
            style={{ color: "#cccccc", fontSize: "15px", lineHeight: 1.6 }}
          >
            Raw Transcript mode with Local Whisper is free forever. Decide
            later whether the 11 content modes are worth the one-time license.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-3 font-mono font-bold rounded-lg px-6 py-4 transition"
            style={{
              background: "var(--brand-cyan)",
              color: "#0a0a0a",
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          >
            ↓ DOWNLOAD FOR MAC
          </Link>
          <p
            className="mt-4"
            style={{ color: "var(--brand-muted)", fontSize: "12px" }}
          >
            Already convinced?{" "}
            <Link
              href="/compare"
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              Full comparison vs all dictation apps →
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ComplaintCard({
  n,
  complaint,
  detail,
  answer,
}: {
  n: number;
  complaint: string;
  detail: string;
  answer: string;
}) {
  return (
    <div
      className="rounded-xl p-6 mb-5"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
    >
      <div className="flex items-start gap-4 mb-3">
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
        <h3
          className="font-bold"
          style={{ color: "#ffffff", fontSize: "17px", lineHeight: 1.4 }}
        >
          &ldquo;{complaint}&rdquo;
        </h3>
      </div>
      <p
        className="mb-4 pl-11"
        style={{ color: "#bbbbbb", fontSize: "14px", lineHeight: 1.6 }}
      >
        {detail}
      </p>
      <div
        className="pl-11"
        style={{ borderLeft: "2px solid var(--brand-cyan-dim)", marginLeft: "9px" }}
      >
        <p
          className="font-mono mb-2"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "10px",
            letterSpacing: "0.2em",
          }}
        >
          VOQUENCE
        </p>
        <p style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

function CompareRow({
  label,
  voq,
  wispr,
  last,
}: {
  label: string;
  voq: string;
  wispr: string;
  last?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-3 gap-3 px-5 py-4"
      style={{
        borderBottom: last ? "none" : "1px solid var(--brand-border)",
      }}
    >
      <div
        className="font-mono"
        style={{
          color: "var(--brand-muted)",
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div style={{ color: "var(--brand-cyan)", fontSize: "13px", lineHeight: 1.5 }}>
        {voq}
      </div>
      <div style={{ color: "#aaaaaa", fontSize: "13px", lineHeight: 1.5 }}>
        {wispr}
      </div>
    </div>
  );
}
