import Stripe from "stripe";

/**
 * Server-only Stripe client. Uses the secret key from the environment.
 * In Test mode this is sk_test_...; in Live mode sk_live_...; the same
 * code runs against whichever key is set, which is how we promote the
 * sandbox-tested flow to production unchanged.
 *
 * NEVER import this into a client component — STRIPE_SECRET_KEY must
 * stay server-side.
 */
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * The two Managed Cloud subscription prices, keyed by the plan string
 * the client sends. Price IDs live in env so Test and Live can hold
 * different values without a code change.
 *
 *   Test (sandbox):
 *     monthly  price_1TgrL2RxUtXQibQKqKH5sGlY  ($9.99/mo)
 *     annual   price_1TgrQQRxUtXQibQKaIQzCPyo  ($99/yr)
 */
export const MANAGED_CLOUD_PRICES = {
  monthly: process.env.STRIPE_PRICE_MANAGED_CLOUD_MONTHLY!,
  annual: process.env.STRIPE_PRICE_MANAGED_CLOUD_ANNUAL!,
} as const;

export type ManagedCloudPlan = keyof typeof MANAGED_CLOUD_PRICES;
