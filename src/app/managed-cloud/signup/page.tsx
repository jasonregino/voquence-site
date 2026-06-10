import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SignupForm } from "./signup-form";

export const metadata = {
  title: "Sign up for Managed Cloud · Voquence",
  description:
    "Create your Voquence Managed Cloud account. $9.99/month, free for Founders.",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />

      <SiteHeader />

      <section className="relative z-10 px-6 sm:px-12 pt-8 pb-12 max-w-xl mx-auto w-full">
        <h1
          className="font-mono font-black mb-4"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "clamp(24px, 4vw, 32px)",
            letterSpacing: "0.18em",
          }}
        >
          CREATE ACCOUNT
        </h1>
        <p
          className="mb-8"
          style={{ color: "#cccccc", fontSize: "15px", lineHeight: 1.6 }}
        >
          Set up your Managed Cloud login. If you already bought a Founding
          License, use the same email and your account will unlock free
          Managed Cloud automatically.
        </p>

        {/* Cowork-audited disclosure copy — transparency about the auth vendor
            neutralizes the "trust a third party" concern by surfacing it
            up-front instead of letting a reader discover it. */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
          }}
        >
          <p
            className="font-mono mb-2"
            style={{
              color: "var(--brand-cyan)",
              fontSize: "10px",
              letterSpacing: "0.2em",
            }}
          >
            HOW YOUR LOGIN WORKS
          </p>
          <p style={{ color: "#cccccc", fontSize: "13px", lineHeight: 1.6 }}>
            Your login and subscription are handled by{" "}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              Supabase
            </a>
            . They see your email and account status, nothing you dictate.
            Your dictation is processed only when you actively use Managed
            Cloud, and is never stored.{" "}
            <Link
              href="/privacy"
              className="underline"
              style={{ color: "var(--brand-cyan)" }}
            >
              Full privacy details →
            </Link>
          </p>
        </div>

        <SignupForm />

        <p
          className="mt-6 text-center"
          style={{ color: "var(--brand-muted)", fontSize: "13px" }}
        >
          Already have an account?{" "}
          <Link
            href="/managed-cloud/login"
            className="underline"
            style={{ color: "var(--brand-cyan)" }}
          >
            Sign in →
          </Link>
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
