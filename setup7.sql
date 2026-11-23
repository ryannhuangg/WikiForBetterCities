create table if not exists user_prefs (
  id uuid primary key references auth.users(id) on delete cascade,
  a11y jsonb not null default '{}' check (pg_column_size(a11y) < 1000),
  updated_at timestamptz not null default now()
);
alter table user_prefs enable row level security;
drop policy if exists "own prefs read" on user_prefs;
drop policy if exists "own prefs insert" on user_prefs;
drop policy if exists "own prefs update" on user_prefs;
create policy "own prefs read" on user_prefs for select using (auth.uid() = id);
create policy "own prefs insert" on user_prefs for insert with check (auth.uid() = id);
create policy "own prefs update" on user_prefs for update using (auth.uid() = id) with check (auth.uid() = id);
