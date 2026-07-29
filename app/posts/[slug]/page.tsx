import { PostArticle } from "@/components/PostArticle";
import { getCachedPublishedPostByAnyLocaleSlugOrCanonicalSlug } from "@/lib/cached-posts";
import { createPostMetadata } from "@/lib/post-metadata";
import { canonicalPostSlug } from "@/lib/slug";
import { postPath } from "@/lib/urls";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { cache } from "react";

export const dynamic = "force-dynamic";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);

  if (!post) {
    return {
      title: "Post not found"
    };
  }

  return createPostMetadata(post);
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await loadPost(slug);

  if (!post) {
    notFound();
  }

  const path = postPath(post);

  if (path !== `/posts/${encodeURIComponent(decodeURIComponent(slug))}`) {
    permanentRedirect(path);
  }

  return <PostArticle post={post} locale={post.locale} />;
}

const loadPost = cache(async (slugParam: string) => {
  const slug = canonicalPostSlug(decodeURIComponent(slugParam));
  return getCachedPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug);
});
