drop table if exists articles cascade;

create table articles (
  id uuid primary key default gen_random_uuid(),
  cat text not null check (cat in ('roads','bridges','structures','transit','parks','zoning')),
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);
alter table articles enable row level security;
create policy "public read" on articles for select using (true);
create policy "admin write" on articles for all using (is_admin()) with check (is_admin());

create table meetings (
  id uuid primary key default gen_random_uuid(),
  meeting_date date not null unique,
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);
alter table meetings enable row level security;
create policy "public read" on meetings for select using (true);
create policy "admin write" on meetings for all using (is_admin()) with check (is_admin());

create table meeting_articles (
  meeting_id uuid not null references meetings on delete cascade,
  article_id uuid not null references articles on delete cascade,
  primary key (meeting_id, article_id)
);
alter table meeting_articles enable row level security;
create policy "public read" on meeting_articles for select using (true);
create policy "admin write" on meeting_articles for all using (is_admin()) with check (is_admin());
