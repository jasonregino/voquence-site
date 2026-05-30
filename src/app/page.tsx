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
        <div className="cyan-glow rounded-full p-2 mb-8">
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
          VOICE INTO READY-TO-PASTE CONTENT
        </p>

        <p
          className="max-w-xl text-lg mb-12 leading-relaxed"
          style={{ color: "#cccccc" }}
        >
          Most dictation apps give you a transcript. Voquence turns your voice into
          finished business content. Book descriptions, tweet threads, AI prompts,
          tech support replies, pasted at your cursor in seconds.
        </p>

        <EmailSignup />

        <p
          className="font-mono mt-6"
          style={{ color: "var(--brand-muted)", fontSize: "11px", letterSpacing: "0.1em" }}
        >
          Mac launching first. Windows shortly after.
        </p>
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
          Hit a hotkey. Speak naturally. The polished output pastes wherever your cursor is.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <ModeExample
            mode="Book Description"
            input="book about lifting for guys over 40 who feel tired and weak. thirty day plan. food sleep stress."
            output="You're not getting old, your testosterone is crashing. Inside, you'll learn how to reverse the signs of aging in 30 days through nutrition, training, and recovery..."
          />
          <ModeExample
            mode="Tweet Thread"
            input="the 49ers are winning the super bowl this year"
            output="1/ The 49ers are winning the Super Bowl this year. 2/ Their defense is suffocating. They're forcing turnovers at a rate that makes offenses uncomfortable before the game even starts..."
          />
          <ModeExample
            mode="Prompt Builder"
            input="coloring book about a fish in an aquarium bold and easy with text at the top saying the fish name"
            output="You are a children's coloring book illustrator. Create a single coloring book page featuring an aquarium scene with bold, thick black outlines suitable for coloring..."
          />
        </div>
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

function ModeExample({ mode, input, output }: { mode: string; input: string; output: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "var(--brand-surface)",
        border: "1px solid var(--brand-border)",
      }}
    >
      <div
        className="font-mono px-5 py-3"
        style={{
          color: "var(--brand-cyan)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          fontWeight: 800,
          borderBottom: "1px solid var(--brand-border)",
        }}
      >
        {mode.toUpperCase()}
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
