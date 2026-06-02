import { getPostgresPool, type PostRecord, type PostStatus } from "@/lib/db";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

type PostRow = PostRecord & {
  created_at: Date | string;
  published_at: Date | string | null;
  updated_at: Date | string;
};

export async function listPostgresPublishedPosts() {
  const { rows } = await getPostgresPool().query<PostRow>(
    "select * from public.posts where status = 'published' order by published_at desc nulls last"
  );

  return rows.map(normalizePostRow);
}

export async function listPostgresPublishedPostsByLocale(locale: Locale) {
  const { rows } = await getPostgresPool().query<PostRow>(
    "select * from public.posts where status = 'published' and locale = $1 order by published_at desc nulls last",
    [locale]
  );

  return rows.map(normalizePostRow);
}

export async function listPostgresPosts(locale?: Locale) {
  const { rows } = locale
    ? await getPostgresPool().query<PostRow>("select * from public.posts where locale = $1", [locale])
    : await getPostgresPool().query<PostRow>("select * from public.posts");

  return rows.map(normalizePostRow);
}

export async function getPostgresPostBySlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  const { rows } = await getPostgresPool().query<PostRow>(
    "select * from public.posts where locale = $1 and slug = $2 limit 1",
    [locale, slug]
  );

  return rows[0] ? normalizePostRow(rows[0]) : null;
}

export async function getPostgresPublishedPostByLegacyPath(params: {
  year: string;
  month: string;
  day: string;
  slug: string;
}) {
  const start = `${params.year}-${params.month}-${params.day}T00:00:00.000Z`;
  const end = `${params.year}-${params.month}-${params.day}T23:59:59.999Z`;
  const { rows } = await getPostgresPool().query<PostRow>(
    `
      select *
      from public.posts
      where slug = $1
        and status = 'published'
        and published_at >= $2
        and published_at <= $3
      order by (locale = 'zh') desc
      limit 1
    `,
    [params.slug, start, end]
  );

  return rows[0] ? normalizePostRow(rows[0]) : null;
}

export async function createPostgresApiPost(input: {
  title: string;
  slug: string;
  locale: Locale;
  translationKey: string;
  author: string;
  excerpt: string | null;
  contentMarkdown: string;
  status: PostStatus;
  publishedAt: string;
}) {
  const { rows } = await getPostgresPool().query<PostRow>(
    `
      insert into public.posts (
        title,
        slug,
        locale,
        translation_key,
        author,
        excerpt,
        content_markdown,
        status,
        published_at,
        source
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'api')
      returning *
    `,
    [
      input.title,
      input.slug,
      input.locale,
      input.translationKey,
      input.author,
      input.excerpt,
      input.contentMarkdown,
      input.status,
      input.publishedAt
    ]
  );

  return normalizePostRow(rows[0]);
}

function normalizePostRow(row: PostRow): PostRecord {
  return {
    ...row,
    created_at: normalizeDate(row.created_at),
    published_at: row.published_at ? normalizeDate(row.published_at) : null,
    updated_at: normalizeDate(row.updated_at)
  };
}

function normalizeDate(value: Date | string) {
  return value instanceof Date ? value.toISOString() : value;
}
