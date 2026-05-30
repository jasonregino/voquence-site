"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-md text-center font-mono text-sm"
        style={{
          padding: "20px 24px",
          background: "rgba(34, 197, 94, 0.08)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          color: "#22c55e",
        }}
      >
        ✓ You&apos;re on the list. We&apos;ll email you when Voquence ships.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 font-mono"
        style={{
          background: "var(--brand-surface)",
          border: "1px solid var(--brand-border)",
          color: "var(--brand-text)",
          padding: "14px 16px",
          borderRadius: "8px",
          fontSize: "14px",
          outline: "none",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="font-mono font-bold"
        style={{
          background: "var(--brand-cyan)",
          color: "#0a0a0a",
          padding: "14px 24px",
          borderRadius: "8px",
          fontSize: "13px",
          letterSpacing: "0.12em",
          border: "none",
          cursor: status === "loading" ? "wait" : "pointer",
          opacity: status === "loading" ? 0.6 : 1,
          whiteSpace: "nowrap",
        }}
      >
        {status === "loading" ? "JOINING..." : "JOIN WISHLIST"}
      </button>
      {status === "error" && (
        <div
          className="sm:absolute sm:-bottom-7 font-mono text-xs"
          style={{ color: "#ff6464" }}
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
}
