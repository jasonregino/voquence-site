import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Sign in to Managed Cloud · Voquence",
  description: "Sign in to your Voquence Managed Cloud account.",
};

export default function LoginPage() {
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
          SIGN IN
        </h1>
        <p
          className="mb-8"
          style={{ color: "#cccccc", fontSize: "15px", lineHeight: 1.6 }}
        >
          Sign in to your Voquence Managed Cloud account.
        </p>

        <LoginForm />

        <p
          className="mt-6 text-center"
          style={{ color: "var(--brand-muted)", fontSize: "13px" }}
        >
          No account yet?{" "}
          <Link
            href="/managed-cloud/signup"
            className="underline"
            style={{ color: "var(--brand-cyan)" }}
          >
            Create one →
          </Link>
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
