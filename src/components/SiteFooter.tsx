import Link from "next/link";
import { VLogo } from "@/components/VLogo";

/**
 * Persistent footer across every page. Cowork's audit (2026-06-04) caught
 * version drift between the homepage ("v1.0 LAUNCHING SOON") and the other
 * pages ("v0.1.3"). Centralized here so version updates happen in one place.
 */
const CURRENT_VERSION = "v0.4.0";

export function SiteFooter() {
  return (
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
            VOQUENCE · {CURRENT_VERSION}
          </span>
        </Link>
        <div
          className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs justify-center sm:justify-end"
          style={{ color: "var(--brand-muted)" }}
        >
          <Link href="/privacy" style={{ letterSpacing: "0.1em" }}>
            PRIVACY
          </Link>
          <Link href="/terms" style={{ letterSpacing: "0.1em" }}>
            TERMS
          </Link>
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
  );
}
