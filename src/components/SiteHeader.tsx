import Link from "next/link";
import { VLogo } from "@/components/VLogo";

/**
 * Persistent top nav across every page. Cowork's audit (2026-06-04) flagged
 * that without this, /download is a navigational dead-end and visitors who
 * land deep can't reach the comparison or pricing without backing out to
 * the homepage.
 */
export function SiteHeader() {
  return (
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

      <div className="flex items-center gap-5 sm:gap-7">
        <NavLink href="/download">DOWNLOAD</NavLink>
        <NavLink href="/compare">COMPARE</NavLink>
        <a
          href="https://x.com/voquenceapp"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono hidden sm:inline"
          style={{
            color: "var(--brand-muted)",
            fontSize: "12px",
            letterSpacing: "0.15em",
          }}
        >
          @VOQUENCEAPP
        </a>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-mono transition"
      style={{
        color: "var(--brand-muted)",
        fontSize: "12px",
        letterSpacing: "0.18em",
        fontWeight: 700,
      }}
    >
      {children}
    </Link>
  );
}
