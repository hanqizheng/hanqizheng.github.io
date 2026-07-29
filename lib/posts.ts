import {
  databaseProvider,
  getSupabaseAdmin,
  type PostCoverTextTone,
  type PostRecord,
  type PostSummary,
  type PostStatus
} from "@/lib/db";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import {
  getLocalPostBySlug,
  getLocalPostBySlugOrCanonicalSlug,
  getLocalPublishedPostBySlugOrCanonicalSlug,
  getLocalPublishedPostByLegacyPath,
  listLocalPublishedPosts
} from "@/lib/local-posts";
import {
  createPostgresApiPost,
  getPostgresPostBySlug,
  getPostgresPostBySlugOrCanonicalSlug,
  getPostgresPublishedPostByLegacyPath,
  listPostgresPublishedPosts,
  listPostgresPublishedPostsByLocale
} from "@/lib/postgres-posts";
import { canonicalPostSlug } from "@/lib/slug";

const POST_SUMMARY_COLUMNS =
  "id, slug, locale, translation_key, title, author, excerpt, cover_src, cover_position, cover_text_tone, featured, status, published_at, created_at, updated_at, source";

export async function listPublishedPosts(locale: Locale = DEFAULT_LOCALE): Promise<PostSummary[]> {
  const provider = databaseProvider();

  if (provider === "local") {
    return listLocalPublishedPosts(locale);
  }

  if (provider === "postgres") {
    return listPostgresPublishedPostsByLocale(locale);
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("posts")
    .select(POST_SUMMARY_COLUMNS)
    .eq("status", "published")
    .eq("locale", locale)
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to list posts: ${error.message}`);
  }

  return (data ?? []) as PostSummary[];
}

export async function listAllPublishedPosts(): Promise<PostSummary[]> {
  const provider = databaseProvider();

  if (provider === "local") {
    return listLocalPublishedPosts();
  }

  if (provider === "postgres") {
    return listPostgresPublishedPosts();
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("posts")
    .select(POST_SUMMARY_COLUMNS)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to list posts: ${error.message}`);
  }

  return (data ?? []) as PostSummary[];
}

export async function getPostBySlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  const provider = databaseProvider();

  if (provider === "local") {
    return getLocalPostBySlug(slug, locale);
  }

  if (provider === "postgres") {
    return getPostgresPostBySlug(slug, locale);
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("posts").select("*").eq("locale", locale).eq("slug", slug).maybeSingle();

  if (error) {
    throw new Error(`Failed to load post by slug: ${error.message}`);
  }

  return data as PostRecord | null;
}

export async function getPostBySlugOrCanonicalSlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  const provider = databaseProvider();

  if (provider === "local") {
    return getLocalPostBySlugOrCanonicalSlug(slug, locale);
  }

  if (provider === "postgres") {
    return getPostgresPostBySlugOrCanonicalSlug(slug, locale);
  }

  return getSupabasePostBySlugOrCanonicalSlug(slug, locale);
}

async function getSupabasePostBySlugOrCanonicalSlug(slug: string, locale: Locale) {
  const direct = await getPostBySlug(slug, locale);

  if (direct) {
    return direct;
  }

  const supabase = getSupabaseAdmin();
  const { data: slugRows, error: slugError } = await supabase
    .from("posts")
    .select("id, slug, translation_key")
    .eq("locale", locale);

  if (slugError) {
    throw new Error(`Failed to load post slugs: ${slugError.message}`);
  }

  const match = ((slugRows ?? []) as Pick<PostRecord, "id" | "slug" | "translation_key">[]).find((post) =>
    matchesPostSlug(post, slug)
  );

  if (!match) {
    return null;
  }

  const { data, error } = await supabase.from("posts").select("*").eq("id", match.id).maybeSingle();

  if (error) {
    throw new Error(`Failed to load post: ${error.message}`);
  }

  return data as PostRecord | null;
}

export async function getPublishedPostBySlugOrCanonicalSlug(slug: string, locale: Locale = DEFAULT_LOCALE) {
  if (databaseProvider() === "local") {
    return getLocalPublishedPostBySlugOrCanonicalSlug(slug, locale);
  }

  const post = await getPostBySlugOrCanonicalSlug(slug, locale);

  if (!post || post.status !== "published") {
    return null;
  }

  return post;
}

export async function getPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug: string) {
  const candidates = await Promise.all([
    getPublishedPostBySlugOrCanonicalSlug(slug, DEFAULT_LOCALE),
    getPublishedPostBySlugOrCanonicalSlug(slug, "en")
  ]);

  return candidates.find(Boolean) ?? null;
}

export async function getPublishedPostByLegacyPath(params: {
  year: string;
  month: string;
  day: string;
  slug: string;
}) {
  const provider = databaseProvider();

  if (provider === "local") {
    return getLocalPublishedPostByLegacyPath(params);
  }

  if (provider === "postgres") {
    return getPostgresPublishedPostByLegacyPath(params);
  }

  const supabase = getSupabaseAdmin();
  const start = `${params.year}-${params.month}-${params.day}T00:00:00.000Z`;
  const end = `${params.year}-${params.month}-${params.day}T23:59:59.999Z`;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "published")
    .gte("published_at", start)
    .lte("published_at", end);

  if (error) {
    throw new Error(`Failed to load post: ${error.message}`);
  }

  return pickDefaultLocaleFirst((data ?? []) as PostRecord[]);
}

export async function createApiPost(input: {
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
  if (databaseProvider() === "postgres") {
    return createPostgresApiPost(input);
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("posts")
    .insert({
      title: input.title,
      slug: input.slug,
      locale: input.locale,
      translation_key: input.translationKey,
      author: input.author,
      excerpt: input.excerpt,
      cover_src: input.coverSrc,
      cover_position: input.coverPosition,
      cover_text_tone: input.coverTextTone,
      featured: input.featured,
      content_markdown: input.contentMarkdown,
      status: input.status,
      published_at: input.publishedAt,
      source: "api"
    })
    .select("*")
    .single();

  if (error) {
    throw new Error(`Failed to create post: ${error.message}`);
  }

  return data as PostRecord;
}

export type PublishedPost = PostRecord;
export type PublishedPostSummary = PostSummary;

function matchesPostSlug(post: Pick<PostRecord, "slug" | "translation_key">, slug: string) {
  return post.slug === slug || canonicalPostSlug(post.slug) === slug || canonicalPostSlug(post.translation_key) === slug;
}

function pickDefaultLocaleFirst(posts: PostRecord[]) {
  return posts.sort((a, b) => Number(b.locale === DEFAULT_LOCALE) - Number(a.locale === DEFAULT_LOCALE))[0] ?? null;
}
