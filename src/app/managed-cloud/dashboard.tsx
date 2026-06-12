"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/**
 * The signed-in Managed Cloud view. The server component computes which
 * state the user is in and passes it here; this component renders the
 * matching card and wires the action buttons to the API routes.
 */
export type DashboardState =
  | { kind: "subscribed"; status: string; periodEnd: string | null }
  | { kind: "founder_forever" }
  | { kind: "founder_active"; daysLeft: number; endDate: string }
  | { kind: "founder_not_activated" }
  | { kind: "founder_expired" }
  | { kind: "none" };

const cardStyle: React.CSSProperties = {
  background: "var(--brand-surface)",
  border: "1px solid var(--brand-cyan)",
  boxShadow: "0 0 24px rgba(0, 212, 255, 0.15)",
};

const eyebrow: React.CSSProperties = {
  color: "var(--brand-cyan)",
  fontSize: "11px",
  letterSpacing: "0.2em",
};

export function ManagedCloudDashboard({
  email,
  state,
  justCheckedOut = false,
}: {
  email: string;
  state: DashboardState;
  justCheckedOut?: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // After Stripe checkout, the browser is redirected back here a beat before
  // the webhook finishes writing "active" to the DB. Rather than flash the
  // subscribe buttons (which reads as "did my payment fail?"), show an
  // "activating" state and quietly re-fetch until the subscription appears.
  const finalizing = justCheckedOut && state.kind === "none";
  const pollsRef = useRef(0);
  useEffect(() => {
    if (!finalizing) return;
    if (pollsRef.current >= 8) return; // ~20s ceiling, then stop polling
    const t = setTimeout(() => {
      pollsRef.current += 1;
      router.refresh();
    }, 2500);
    return () => clearTimeout(t);
  }, [finalizing, state, router]);

  async function post(path: string, body?: object) {
    const res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Something went wrong");
    return data;
  }

  async function subscribe(plan: "monthly" | "annual") {
    setError(null);
    setBusy(plan);
    try {
      const { url } = await post("/api/create-checkout", { plan });
      window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not start checkout");
      setBusy(null);
    }
  }

  async function activateFounderYear() {
    setError(null);
    setBusy("activate");
    try {
      await post("/api/founder/activate");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not activate");
      setBusy(null);
    }
  }

  async function manageBilling() {
    setError(null);
    setBusy("billing");
    try {
      const { url } = await post("/api/billing-portal");
      window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not open billing");
      setBusy(null);
    }
  }

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
        <p style={{ color: "var(--brand-muted)", fontSize: "13px" }}>
          Signed in as <strong style={{ color: "#ffffff" }}>{email}</strong>
        </p>
        <button
          onClick={signOut}
          className="font-mono"
          style={{
            color: "var(--brand-muted)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          SIGN OUT
        </button>
      </div>

      {finalizing && (
        <StatusCard label="ACTIVATING YOUR ACCOUNT">
          <p style={bodyText}>
            Payment received, thank you. We&apos;re switching on your Managed
            Cloud access now. This usually takes a few seconds and updates on
            its own. If it doesn&apos;t, tap refresh below.
          </p>
          <ActionButton onClick={() => router.refresh()} loading={false}>
            REFRESH
          </ActionButton>
        </StatusCard>
      )}

      {state.kind === "subscribed" && (
        <StatusCard label="MANAGED CLOUD ACTIVE">
          <p style={bodyText}>
            Your subscription is{" "}
            <strong style={{ color: "#22c55e" }}>{state.status}</strong>. All 11
            polish and content modes are unlocked, no Anthropic key needed.
            {state.periodEnd && (
              <>
                {" "}
                Next renewal: <strong style={{ color: "#ffffff" }}>
                  {formatDate(state.periodEnd)}
                </strong>
                .
              </>
            )}
          </p>
          <ActionButton onClick={manageBilling} loading={busy === "billing"}>
            MANAGE BILLING
          </ActionButton>
        </StatusCard>
      )}

      {state.kind === "founder_forever" && (
        <StatusCard label="FOUNDER · MANAGED CLOUD">
          <p style={bodyText}>
            You&apos;re a Founder with Managed Cloud access on the house. All 11
            modes are unlocked, no key needed. Thank you for being here first.
          </p>
        </StatusCard>
      )}

      {state.kind === "founder_active" && (
        <StatusCard label="FOUNDER · FREE YEAR ACTIVE">
          <p style={bodyText}>
            Your free year of Managed Cloud is running.{" "}
            <strong style={{ color: "#22c55e" }}>
              {state.daysLeft} {state.daysLeft === 1 ? "day" : "days"} left
            </strong>{" "}
            (through {formatDate(state.endDate)}). All 11 modes unlocked, no key
            needed. After that it&apos;s $9.99/mo or cancel, no surprise charge.
          </p>
        </StatusCard>
      )}

      {state.kind === "founder_not_activated" && (
        <StatusCard label="FOUNDER · ACTIVATE YOUR FREE YEAR">
          <p style={bodyText}>
            Your Founding License includes one free year of Managed Cloud. The
            clock only starts when you turn it on, so activate whenever
            you&apos;re ready. No card required.
          </p>
          <ActionButton
            onClick={activateFounderYear}
            loading={busy === "activate"}
          >
            ACTIVATE FREE YEAR
          </ActionButton>
        </StatusCard>
      )}

      {!finalizing && (state.kind === "none" || state.kind === "founder_expired") && (
        <StatusCard
          label={
            state.kind === "founder_expired"
              ? "FOUNDER · FREE YEAR ENDED"
              : "ACTIVATE MANAGED CLOUD"
          }
        >
          <p style={bodyText}>
            {state.kind === "founder_expired"
              ? "Your free Founder year has ended. Keep all 11 modes running with a subscription, or cancel anytime."
              : "Unlock all 11 polish and content modes through Voquence's Anthropic proxy. No key needed, cancel anytime."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <ActionButton onClick={() => subscribe("monthly")} loading={busy === "monthly"}>
              $9.99 / MONTH
            </ActionButton>
            <ActionButton
              onClick={() => subscribe("annual")}
              loading={busy === "annual"}
              variant="outline"
            >
              $99 / YEAR · SAVE 17%
            </ActionButton>
          </div>
        </StatusCard>
      )}

      {error && (
        <div
          className="rounded-lg p-3 mt-4"
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
    </div>
  );
}

const bodyText: React.CSSProperties = {
  color: "#cccccc",
  fontSize: "15px",
  lineHeight: 1.6,
};

function StatusCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl p-6 vq-card" style={cardStyle}>
      <p className="font-mono mb-3" style={eyebrow}>
        {label}
      </p>
      {children}
    </div>
  );
}

function ActionButton({
  onClick,
  loading,
  children,
  variant = "solid",
}: {
  onClick: () => void;
  loading: boolean;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const solid: React.CSSProperties = {
    background: "var(--brand-cyan)",
    color: "#0a0a0a",
    boxShadow: "0 0 24px rgba(0, 212, 255, 0.25)",
  };
  const outline: React.CSSProperties = {
    background: "transparent",
    color: "var(--brand-cyan)",
    border: "1px solid var(--brand-cyan)",
  };
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="inline-flex items-center justify-center font-mono font-bold rounded-lg px-6 py-4 transition mt-4 vq-cta"
      style={{
        ...(variant === "solid" ? solid : outline),
        fontSize: "14px",
        letterSpacing: "0.15em",
        opacity: loading ? 0.6 : 1,
        cursor: loading ? "wait" : "pointer",
      }}
    >
      {loading ? "..." : children}
    </button>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
