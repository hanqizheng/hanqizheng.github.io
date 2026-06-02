import { databaseProvider, getSupabaseAdmin, type PostRecord, type PostStatus } from "@/lib/db";
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
  getPostgresPublishedPostByLegacyPath,
  listPostgresPosts,
  listPostgresPublishedPosts,
  listPostgresPublishedPostsByLocale
} from "@/lib/postgres-posts";
import { canonicalPostSlug } from "@/lib/slug";

export async function listPublishedPosts(locale: Locale = DEFAULT_LOCALE) {
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
    .select("*")
    .eq("status", "published")
    .eq("locale", locale)
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to list posts: ${error.message}`);
  }

  return (data ?? []) as PostRecord[];
}

export async function listAllPublishedPosts() {
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
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to list posts: ${error.message}`);
  }

  return (data ?? []) as PostRecord[];
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
    const direct = await getPostgresPostBySlug(slug, locale);

    if (direct) {
      return direct;
    }

    return (await listPostgresPosts(locale)).find((post) => matchesPostSlug(post, slug)) ?? null;
  }

  const direct = await getPostBySlug(slug, locale);

  if (direct) {
    return direct;
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("posts").select("*").eq("locale", locale);

  if (error) {
    throw new Error(`Failed to load posts: ${error.message}`);
  }

  return ((data ?? []) as PostRecord[]).find((post) => matchesPostSlug(post, slug)) ?? null;
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

function matchesPostSlug(post: Pick<PostRecord, "slug" | "translation_key">, slug: string) {
  return post.slug === slug || canonicalPostSlug(post.slug) === slug || canonicalPostSlug(post.translation_key) === slug;
}

function pickDefaultLocaleFirst(posts: PostRecord[]) {
  return posts.sort((a, b) => Number(b.locale === DEFAULT_LOCALE) - Number(a.locale === DEFAULT_LOCALE))[0] ?? null;
}
