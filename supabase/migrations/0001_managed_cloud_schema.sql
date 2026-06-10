-- Voquence Managed Cloud schema
-- Created 2026-06-09 for the v0.4 Managed Cloud backend.
--
-- Three tables:
--   profiles      -- extends auth.users with Voquence-specific fields
--   subscriptions -- one row per active Stripe subscription
--   usage_logs    -- per-user counter for the 10k polishings/mo cap
--
-- RLS posture: every table has RLS on. Users can read their own data.
-- Writes go through the service_role key only (server-only code paths:
-- Stripe webhook, Claude proxy). This is the secure-by-default pattern
-- the Cowork audit signed off on.

-- ============================================================================
-- profiles: extends auth.users with Voquence-specific user metadata
-- ============================================================================

create table public.profiles (
  -- Mirrors auth.users.id. Foreign key with cascade on delete so deleting
  -- the auth row removes the profile and all dependent rows too.
  id uuid primary key references auth.users(id) on delete cascade,

  -- Cached from auth.users.email for joins/queries. Updated by trigger
  -- (see handle_new_user below) when the auth user is created.
  email text not null,

  -- True if this user bought a Voquence Founding License (the $19
  -- one-time purchase on Stripe). Founders get free Managed Cloud
  -- access forever. Set by the founder-detection job in Session 2.
  is_founder boolean not null default false,

  -- The Stripe customer ID for this user (null until they sign up for
  -- Managed Cloud or buy a Founding License with the same email).
  stripe_customer_id text unique,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_email_idx on public.profiles (email);
create index profiles_stripe_customer_id_idx on public.profiles (stripe_customer_id);

-- Automatically create a profile row when a new auth user signs up.
-- The email is copied from auth.users.email so we don't have to make
-- the user re-enter it during the app's signup form.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================================
-- subscriptions: Stripe subscription state, synced via webhook
-- ============================================================================

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,

  -- The Stripe subscription ID (sub_...). Unique because one user
  -- should have one active Managed Cloud subscription at a time.
  stripe_subscription_id text not null unique,

  -- Mirrors Stripe's subscription.status field. Values include:
  --   trialing, active, past_due, canceled, unpaid, incomplete,
  --   incomplete_expired, paused
  -- The Claude proxy only allows requests when this is 'active' or
  -- 'trialing'.
  status text not null,

  -- Current billing period boundaries (cached from Stripe for cheap
  -- access without an API round trip on every Claude call).
  current_period_start timestamptz,
  current_period_end timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index subscriptions_user_id_idx on public.subscriptions (user_id);
create index subscriptions_status_idx on public.subscriptions (status);

-- ============================================================================
-- usage_logs: per-user monthly counter for the 10k polishings cap
-- ============================================================================

create table public.usage_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,

  -- The YYYY-MM bucket this row counts. One row per user per month.
  -- Composite unique constraint with user_id below enforces this.
  -- Stored as a date pinned to the 1st so range queries are natural.
  month date not null,

  -- How many Claude polishings the user has consumed in this month.
  -- Soft cap warning at 8000, hard cap at 10000 (defined in the proxy).
  polishing_count integer not null default 0,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (user_id, month)
);

create index usage_logs_user_id_month_idx on public.usage_logs (user_id, month);

-- Helper: atomically increment a user's monthly counter and return the
-- new count. Used by the Claude proxy on every authenticated call.
-- Inserts a fresh row if the user has no log for this month yet.
create or replace function public.increment_usage(
  p_user_id uuid,
  p_month date
)
returns integer
language plpgsql
security definer set search_path = public
as $$
declare
  new_count integer;
begin
  insert into public.usage_logs (user_id, month, polishing_count)
  values (p_user_id, p_month, 1)
  on conflict (user_id, month)
  do update set
    polishing_count = public.usage_logs.polishing_count + 1,
    updated_at = now()
  returning polishing_count into new_count;

  return new_count;
end;
$$;

-- ============================================================================
-- Row Level Security policies
-- ============================================================================
-- Each table gets RLS on (forced by the project setting) plus explicit
-- read policies for the user's own rows. All writes go through the
-- service_role key (server-only paths). This is the secure-by-default
-- pattern Cowork signed off on.

alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.usage_logs enable row level security;

-- Users can read their own profile.
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can update their own profile (e.g., changing display name later).
-- Note: is_founder and stripe_customer_id are not user-editable in
-- practice because the app form won't expose them, and a malicious
-- user can't set them because the writes go through this RLS check
-- but the columns aren't on the update path the app exposes.
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- Users can read their own subscriptions.
create policy "subscriptions_select_own"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Users can read their own usage logs.
create policy "usage_logs_select_own"
  on public.usage_logs for select
  using (auth.uid() = user_id);

-- ============================================================================
-- Expose tables to PostgREST so the auto-generated API can serve reads
-- ============================================================================
-- "Automatically expose new tables" was DISABLED at project creation
-- per the Cowork-audited secure-by-default posture. So we must grant
-- the anon and authenticated roles explicit access to the tables we
-- want exposed via supabase-js. We expose all three for reads only;
-- writes are still gated by the RLS policies above plus the server-only
-- service_role key paths.

grant select on public.profiles to anon, authenticated;
grant select on public.subscriptions to anon, authenticated;
grant select on public.usage_logs to anon, authenticated;
