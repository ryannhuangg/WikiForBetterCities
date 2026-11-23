create table profiles (
  id uuid primary key references auth.users on delete cascade,
  is_admin boolean not null default false
);
alter table profiles enable row level security;
create policy "read own profile" on profiles for select using (auth.uid() = id);

create function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id) values (new.id);
  return new;
end $$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function handle_new_user();

insert into profiles (id) select id from auth.users on conflict do nothing;

create function is_admin() returns boolean
language sql security definer stable set search_path = public as $$
  select coalesce((select is_admin from profiles where id = auth.uid()), false)
$$;

create table articles (
  id uuid primary key default gen_random_uuid(),
  meeting_date date not null,
  cat text not null check (cat in ('roads','bridges','structures','transit','parks','zoning')),
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);
alter table articles enable row level security;
create policy "public read" on articles for select using (true);
create policy "admin insert" on articles for insert with check (is_admin());
create policy "admin update" on articles for update using (is_admin()) with check (is_admin());
create policy "admin delete" on articles for delete using (is_admin());
