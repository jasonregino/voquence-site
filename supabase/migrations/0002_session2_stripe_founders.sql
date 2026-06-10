-- Voquence Managed Cloud — Session 2: Stripe subscriptions + Founder detection
-- Created 2026-06-10.
--
-- Builds on 0001. Adds:
--   1. founding_purchases  -- records every $19 Founding License sale by email,
--                             so we can flag Founders who buy BEFORE they make a
--                             Managed Cloud account.
--   2. profiles.founder_cloud_activated_at  -- when a Founder switched their free
--                             year ON. Free year = this date + 365 days. Null
--                             until they activate.
--   3. profiles.cloud_free_forever  -- the Ives exception (Founder #1). Set
--                             manually, never exposed in site copy. Bypasses the
--                             365-day expiry for the rare honored-forever case.
--   4. handle_new_user is updated so a brand-new signup is auto-flagged
--      is_founder if their email already bought a Founding License.
--
-- RLS posture matches 0001: founding_purchases is server-only (no anon/
-- authenticated grants). Only the service_role key (Stripe webhook) writes it.

-- ============================================================================
-- 1. founding_purchases: one row per $19 Founding License sale
-- ============================================================================

create table public.founding_purchases (
  id uuid primary key default gen_random_uuid(),

  -- Buyer email, stored lowercased by the webhook so matching against
  -- auth.users.email (also lowercased) is reliable. Unique so a repeated
  -- webhook delivery for the same buyer is a no-op (on conflict do nothing).
  email text not null unique,

  -- The Stripe Checkout Session that captured the purchase (cs_...). Kept
  -- for auditing and to trace a row back to the exact payment.
  stripe_checkout_session_id text unique,

  -- Amount paid in cents (1900 for the $19 license). Cached for the record.
  amount_total integer,

  created_at timestamptz not null default now()
);

create index founding_purchases_email_idx on public.founding_purchases (email);

-- ============================================================================
-- 2 + 3. New profile columns for the Founder free-year mechanism
-- ============================================================================

alter table public.profiles
  -- When the Founder activated their free year of Managed Cloud. The free
  -- window is [founder_cloud_activated_at, +365 days). Null = not activated.
  add column founder_cloud_activated_at timestamptz,

  -- The honored-forever exception (Ives / Founder #1). Defaults false. Set
  -- by hand via SQL when a specific Founder's cloud is gifted indefinitely.
  -- Not user-editable and not exposed anywhere in site copy.
  add column cloud_free_forever boolean not null default false;

-- ============================================================================
-- 4. Auto-flag Founders at signup time
-- ============================================================================
-- Replaces the 0001 version of handle_new_user. Same job (create a profile
-- row when an auth user is created) plus: if the new user's email already
-- bought a Founding License, mark them is_founder immediately. This closes
-- the "bought the license before making an account" gap. The other
-- direction (already had an account, then buys) is handled in the webhook.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, is_founder)
  values (
    new.id,
    new.email,
    exists (
      select 1
      from public.founding_purchases fp
      where fp.email = lower(new.email)
    )
  );
  return new;
end;
$$;

-- ============================================================================
-- Row Level Security for founding_purchases
-- ============================================================================
-- Enable RLS with NO read policies. There is nothing here a logged-in user
-- needs to read directly — the is_founder flag on their own profile is the
-- only surface they see. All access is through the service_role key in the
-- webhook, which bypasses RLS. No grants to anon/authenticated.

alter table public.founding_purchases enable row level security;
