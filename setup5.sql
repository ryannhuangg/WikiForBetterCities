create or replace function pending_count() returns int language sql security definer set search_path = public as $$ select count(*)::int from submissions where status = 'pending' $$;
grant execute on function pending_count() to anon, authenticated;

drop policy if exists "anyone can submit" on submissions;
create policy "anyone can submit" on submissions for insert with check (status = 'pending' and pending_count() < 100);
