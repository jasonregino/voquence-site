"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

/**
 * Client-side signup form. Calls supabase.auth.signUp() with email +
 * password, which sends a verification email and creates an auth.users
 * row. The handle_new_user trigger in migration 0001 automatically
 * creates the matching public.profiles row.
 *
 * After successful signup, the user goes to /managed-cloud/check-email
 * (built in Session 2 alongside the Stripe Checkout redirect). For now
 * we redirect to /managed-cloud on success.
 */
export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // After clicking the verification link in the email, the user
        // lands back here. /managed-cloud/check-email and the Stripe
        // checkout redirect get built in Session 2.
        emailRedirectTo: `${window.location.origin}/managed-cloud`,
      },
    });

    setLoading(false);

    if (signupError) {
      setError(signupError.message);
      return;
    }

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "signup_completed");
    }
    setSuccess(true);
  }

  if (success) {
    return (
      <div
        className="rounded-xl p-6 vq-card"
        style={{
          background: "var(--brand-surface)",
          border: "1px solid var(--brand-cyan)",
          boxShadow: "0 0 24px rgba(0, 212, 255, 0.15)",
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
          CHECK YOUR EMAIL
        </p>
        <p style={{ color: "#cccccc", fontSize: "14px", lineHeight: 1.6 }}>
          We sent a verification link to <strong>{email}</strong>. Click it
          to finish setting up your account. Then come back here and sign in.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block font-mono mb-2"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="w-full rounded-lg px-4 py-3 vq-input"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
            color: "#ffffff",
            fontSize: "15px",
          }}
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block font-mono mb-2"
          style={{
            color: "var(--brand-cyan)",
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          className="w-full rounded-lg px-4 py-3 vq-input"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
            color: "#ffffff",
            fontSize: "15px",
          }}
        />
        <p
          className="mt-2"
          style={{ color: "var(--brand-muted)", fontSize: "12px" }}
        >
          At least 8 characters.
        </p>
      </div>

      {error && (
        <div
          className="rounded-lg p-3"
          style={{
            background: "rgba(239, 68, 68, 0.1)",
            border: "1px solid #ef4444",
            color: "#fca5a5",
            fontSize: "13px",
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center font-mono font-bold rounded-lg px-6 py-4 transition vq-cta"
        style={{
          background: "var(--brand-cyan)",
          color: "#0a0a0a",
          fontSize: "14px",
          letterSpacing: "0.15em",
          boxShadow: "0 0 24px rgba(0, 212, 255, 0.25)",
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "wait" : "pointer",
        }}
      >
        {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
      </button>
    </form>
  );
}
