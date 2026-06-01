import { getSupabaseAdmin, type PostRecord, type PostStatus } from "@/lib/db";
import {
  getLocalPostBySlug,
  getLocalPostBySlugOrCanonicalSlug,
  getLocalPublishedPostBySlugOrCanonicalSlug,
  getLocalPublishedPostByLegacyPath,
  hasSupabaseEnv,
  listLocalPublishedPosts
} from "@/lib/local-posts";
import { canonicalPostSlug } from "@/lib/slug";

export async function listPublishedPosts() {
  if (!hasSupabaseEnv()) {
    return listLocalPublishedPosts();
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

export async function getPostBySlug(slug: string) {
  if (!hasSupabaseEnv()) {
    return getLocalPostBySlug(slug);
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).maybeSingle();

  if (error) {
    throw new Error(`Failed to load post by slug: ${error.message}`);
  }

  return data as PostRecord | null;
}

export async function getPostBySlugOrCanonicalSlug(slug: string) {
  if (!hasSupabaseEnv()) {
    return getLocalPostBySlugOrCanonicalSlug(slug);
  }

  const direct = await getPostBySlug(slug);

  if (direct) {
    return direct;
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    throw new Error(`Failed to load posts: ${error.message}`);
  }

  return ((data ?? []) as PostRecord[]).find((post) => canonicalPostSlug(post.slug) === slug) ?? null;
}

export async function getPublishedPostBySlugOrCanonicalSlug(slug: string) {
  if (!hasSupabaseEnv()) {
    return getLocalPublishedPostBySlugOrCanonicalSlug(slug);
  }

  const post = await getPostBySlugOrCanonicalSlug(slug);

  if (!post || post.status !== "published") {
    return null;
  }

  return post;
}

export async function getPublishedPostByLegacyPath(params: {
  year: string;
  month: string;
  day: string;
  slug: string;
}) {
  if (!hasSupabaseEnv()) {
    return getLocalPublishedPostByLegacyPath(params);
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
    .lte("published_at", end)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to load post: ${error.message}`);
  }

  return data as PostRecord | null;
}

export async function createApiPost(input: {
  title: string;
  slug: string;
  author: string;
  excerpt: string | null;
  contentMarkdown: string;
  status: PostStatus;
  publishedAt: string;
}) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("posts")
    .insert({
      title: input.title,
      slug: input.slug,
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
