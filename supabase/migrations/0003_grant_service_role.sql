-- Voquence Managed Cloud — Session 2 fix: grant the service_role access
-- Created 2026-06-10.
--
-- This project was created with "automatically expose new tables" disabled
-- (the secure-by-default posture from 0001). A side effect: NO role gets
-- table privileges automatically — not even service_role, the key our
-- server-only code paths (Stripe webhook, Claude proxy, dashboard admin
-- reads) rely on.
--
-- Session 1 never noticed because profile creation runs through a
-- SECURITY DEFINER trigger (executes as the table owner, not service_role),
-- and user-facing reads use the authenticated role's SELECT grants from
-- 0001. Session 2 is the first code to read/write these tables AS the
-- service_role, so it's the first to hit the missing grants (403 / "permission
-- denied for table").
--
-- service_role bypasses RLS by design, so this is purely about table-level
-- GRANTs. We give it full DML on the four Managed Cloud tables.

grant usage on schema public to service_role;

grant select, insert, update, delete on public.profiles to service_role;
grant select, insert, update, delete on public.subscriptions to service_role;
grant select, insert, update, delete on public.usage_logs to service_role;
grant select, insert, update, delete on public.founding_purchases to service_role;
