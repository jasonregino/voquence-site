import { createClient } from "@supabase/supabase-js";

/**
 * Admin Supabase client — uses the service_role key and BYPASSES Row
 * Level Security. Use ONLY in server-only code paths that need
 * privileged access:
 *
 * - Stripe webhook handler (writing subscription state)
 * - Founder detection (cross-user lookup against Stripe purchases)
 * - Admin-only API routes
 *
 * NEVER import this from a client component or expose this client to
 * the browser. The service_role key has full DB access.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
