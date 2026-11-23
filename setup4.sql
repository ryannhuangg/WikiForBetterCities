alter table submissions add column if not exists cat text;
alter table submissions add constraint submissions_title_len check (char_length(title)<=120) not valid;
alter table submissions add constraint submissions_caption_len check (caption is null or char_length(caption)<=300) not valid;
alter table wiki_articles add column if not exists img_alt text;

drop policy if exists "public read approved submissions" on submissions;
create policy "public read approved submissions" on submissions for select using (status='approved');

drop policy if exists "public read approved photos" on storage.objects;
create policy "public read approved photos" on storage.objects for select using (
bucket_id='submissions' and exists (select 1 from submissions s where s.photo_path=storage.objects.name and s.status='approved')
);

update storage.buckets set file_size_limit=5242880, allowed_mime_types=array['image/jpeg','image/png','image/webp','image/gif'] where id='submissions';
