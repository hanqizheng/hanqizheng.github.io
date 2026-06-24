alter table public.posts enable row level security;

revoke insert, update, delete on public.posts from anon, authenticated;
grant select on public.posts to anon, authenticated;

drop policy if exists posts_public_read_published on public.posts;

create policy posts_public_read_published
on public.posts
for select
to anon, authenticated
using (status = 'published');
