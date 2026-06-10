import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Supabase client for use in server components, route handlers, and
 * server actions. Reads cookies from the request to maintain the user's
 * session across requests. Subject to Row Level Security.
 *
 * For privileged server work that needs to bypass RLS (webhook handlers,
 * admin tasks), use createAdminClient() instead.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // The setAll method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions — which we do via /middleware.ts.
          }
        },
      },
    }
  );
}
