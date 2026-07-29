alter table public.posts
  add column if not exists cover_src text,
  add column if not exists cover_position text;

comment on column public.posts.cover_src is
  'Root-relative path to a static cover asset bundled under public/.';

comment on column public.posts.cover_position is
  'CSS object-position used when the cover is cropped.';
