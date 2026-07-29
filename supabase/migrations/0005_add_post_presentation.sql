alter table public.posts
  add column if not exists cover_text_tone text,
  add column if not exists featured boolean not null default false;

alter table public.posts
  drop constraint if exists posts_cover_text_tone_check;

alter table public.posts
  add constraint posts_cover_text_tone_check
  check (cover_text_tone is null or cover_text_tone in ('light', 'dark'));

comment on column public.posts.cover_text_tone is
  'Preferred foreground tone for title and metadata displayed over the cover.';

comment on column public.posts.featured is
  'Editorial flag controlling placement in the featured section.';
