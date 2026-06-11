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
export const stripe = new Stripe((process.env.STRIPE_SECRET_KEY ?? "").trim());

/**
 * The two Managed Cloud subscription prices, keyed by the plan string
 * the client sends. Price IDs live in env so Test and Live can hold
 * different values without a code change.
 *
 *   Test (sandbox):
 *     monthly  price_1TgrL2RxUtXQibQKqKH5sGlY  ($9.99/mo)
 *     annual   price_1TgrQQRxUtXQibQKaIQzCPyo  ($99/yr)
 */
// .trim() guards against stray spaces/tabs/newlines that sneak in when a
// value is copy-pasted into a dashboard env field (e.g. a tab copied out of
// a markdown table). Stripe treats "\tprice_..." as a different, missing id.
export const MANAGED_CLOUD_PRICES = {
  monthly: (process.env.STRIPE_PRICE_MANAGED_CLOUD_MONTHLY ?? "").trim(),
  annual: (process.env.STRIPE_PRICE_MANAGED_CLOUD_ANNUAL ?? "").trim(),
} as const;

export type ManagedCloudPlan = keyof typeof MANAGED_CLOUD_PRICES;

/**
 * Voquence and Source to Social share ONE Stripe account, so the Voquence
 * webhook also receives S2S's events. We identify Voquence's own products to
 * skip foreign events. This is the Founding License PRODUCT id (matches all
 * of its prices). Managed Cloud is matched by its price ids above.
 */
export const FOUNDING_LICENSE_PRODUCT_ID = (
  process.env.STRIPE_PRODUCT_FOUNDING_LICENSE ?? ""
).trim();

/** True if a Stripe price id is one of Voquence's Managed Cloud prices. */
export function isManagedCloudPrice(priceId: string | undefined | null): boolean {
  return (
    !!priceId &&
    (priceId === MANAGED_CLOUD_PRICES.monthly ||
      priceId === MANAGED_CLOUD_PRICES.annual)
  );
}
