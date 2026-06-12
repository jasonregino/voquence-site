-- Voquence Managed Cloud — Session 3: per-minute rate limit for the Claude proxy
-- Created 2026-06-11.
--
-- One row per user, tracking how many proxy requests they've made in the
-- current minute. The bump_minute_rate() function atomically increments and
-- returns the count; the proxy rejects with 429 when it exceeds the cap
-- (10/min, defined in the route). A real human dictating tops out around
-- 2-3/min, so honest users never see this. Scripts hit the wall instantly.
--
-- Design note: a single row per user that RESETS when the minute changes
-- (instead of one row per user per minute) keeps the table permanently tiny —
-- max one row per user, no cleanup job needed.

create table public.proxy_rate_limits (
  user_id uuid primary key references public.profiles(id) on delete cascade,

  -- The minute bucket this count belongs to (date_trunc('minute', now())).
  minute_start timestamptz not null,

  -- Requests made within that minute.
  request_count integer not null default 1,

  updated_at timestamptz not null default now()
);

-- Atomically bump the user's counter for the current minute and return the
-- new count. If their stored bucket is an older minute, reset to 1.
create or replace function public.bump_minute_rate(p_user_id uuid)
returns integer
language plpgsql
security definer set search_path = public
as $$
declare
  new_count integer;
  current_minute timestamptz := date_trunc('minute', now());
begin
  insert into public.proxy_rate_limits (user_id, minute_start, request_count)
  values (p_user_id, current_minute, 1)
  on conflict (user_id) do update set
    request_count = case
      when proxy_rate_limits.minute_start = current_minute
        then proxy_rate_limits.request_count + 1
      else 1
    end,
    minute_start = current_minute,
    updated_at = now()
  returning request_count into new_count;

  return new_count;
end;
$$;

-- RLS on, no read policies — this table is server-only plumbing. And the
-- lesson from migration 0003: this project grants NOTHING automatically,
-- so service_role gets its table access explicitly, here, from day one.
alter table public.proxy_rate_limits enable row level security;

grant select, insert, update, delete on public.proxy_rate_limits to service_role;
grant execute on function public.bump_minute_rate(uuid) to service_role;
