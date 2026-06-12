"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/**
 * Client-side login form. Calls supabase.auth.signInWithPassword() and
 * redirects to /managed-cloud on success. The middleware refreshes the
 * session cookie on the redirect target so server components see the
 * authenticated user immediately.
 */
export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signinError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signinError) {
      setError(signinError.message);
      return;
    }

    router.push("/managed-cloud");
    router.refresh();
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="w-full rounded-lg px-4 py-3 vq-input"
          style={{
            background: "var(--brand-surface)",
            border: "1px solid var(--brand-border)",
            color: "#ffffff",
            fontSize: "15px",
          }}
        />
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
        {loading ? "SIGNING IN..." : "SIGN IN"}
      </button>
    </form>
  );
}
