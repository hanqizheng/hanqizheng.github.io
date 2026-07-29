import {
  getPostgresPool,
  type PostCoverTextTone,
  type PostRecord,
  type PostStatus,
  type PostSummary
} from "@/lib/db";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { canonicalPostSlug } from "@/lib/slug";

type PostRow = PostRecord & {
  created_at: Date | string;
  published_at: Date | string | null;
  updated_at: Date | string;
};

type PostSlugRow = Pick<PostRecord, "id" | "slug" | "translation_key">;
type PostSummaryRow = Omit<PostSummary, "created_at" | "published_at" | "updated_at"> & {
  created_at: Date | string;
  published_at: Date | string | null;
  updated_at: Date | string;
};

const POST_SUMMARY_COLUMNS =
  "id, slug, locale, translation_key, title, author, excerpt, cover_src, cover_position, cover_text_tone, featured, status, published_at, created_at, updated_at, source";

export async function listPostgresPublishedPosts() {
  const { rows } = await getPostgresPool().query<PostSummaryRow>(
    `select ${POST_SUMMARY_COLUMNS} from public.posts where status = 'published' order by published_at desc nulls last`
  );

  return rows.map(normalizePostSummaryRow);
}

export async function listPostgresPublishedPostsByLocale(locale: Locale) {
  const { rows } = await getPostgresPool().query<PostSummaryRow>(
    `select ${POST_SUMMARY_COLUMNS} from public.posts where status = 'published' and locale = $1 order by published_at desc nulls last`,
    [locale]
  );

  return rows.map(normalizePostSummaryRow);
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

export async function getPostgresPostBySlugOrCanonicalSlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  const direct = await getPostgresPostBySlug(slug, locale);

  if (direct) {
    return direct;
  }

  const { rows: slugRows } = await getPostgresPool().query<PostSlugRow>(
    "select id, slug, translation_key from public.posts where locale = $1",
    [locale]
  );
  const match = slugRows.find((post) => matchesPostSlug(post, slug));

  if (!match) {
    return null;
  }

  const { rows } = await getPostgresPool().query<PostRow>("select * from public.posts where id = $1 limit 1", [
    match.id
  ]);

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
  coverSrc: string | null;
  coverPosition: string | null;
  coverTextTone: PostCoverTextTone | null;
  featured: boolean;
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
        cover_src,
        cover_position,
        cover_text_tone,
        featured,
        content_markdown,
        status,
        published_at,
        source
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, 'api')
      returning *
    `,
    [
      input.title,
      input.slug,
      input.locale,
      input.translationKey,
      input.author,
      input.excerpt,
      input.coverSrc,
      input.coverPosition,
      input.coverTextTone,
      input.featured,
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

function normalizePostSummaryRow(row: PostSummaryRow): PostSummary {
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

function matchesPostSlug(post: Pick<PostRecord, "slug" | "translation_key">, slug: string) {
  return post.slug === slug || canonicalPostSlug(post.slug) === slug || canonicalPostSlug(post.translation_key) === slug;
}
