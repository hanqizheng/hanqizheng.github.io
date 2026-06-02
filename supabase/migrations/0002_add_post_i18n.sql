alter table public.posts
add column if not exists locale text not null default 'zh';

alter table public.posts
add column if not exists translation_key text;

update public.posts
set translation_key = slug
where translation_key is null;

alter table public.posts
alter column translation_key set not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'posts_locale_check'
      and conrelid = 'public.posts'::regclass
  ) then
    alter table public.posts
    add constraint posts_locale_check check (locale in ('zh', 'en'));
  end if;
end $$;

alter table public.posts
drop constraint if exists posts_slug_key;

create unique index if not exists posts_locale_slug_key
on public.posts (locale, slug);

create unique index if not exists posts_locale_translation_key_key
on public.posts (locale, translation_key);

create index if not exists posts_locale_status_published_at_idx
on public.posts (locale, status, published_at desc);
