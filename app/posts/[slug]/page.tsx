import { PostArticle } from "@/components/PostArticle";
import { getPublishedPostByAnyLocaleSlugOrCanonicalSlug } from "@/lib/posts";
import { canonicalPostSlug } from "@/lib/slug";
import { postPath } from "@/lib/urls";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

export const dynamic = "force-dynamic";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await loadPost(await params);

  if (!post) {
    return {
      title: "Post not found"
    };
  }

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    authors: [{ name: post.author }],
    alternates: {
      canonical: postPath(post)
    }
  };
}

export default async function PostPage({ params }: Props) {
  const post = await loadPost(await params);

  if (!post) {
    notFound();
  }

  const path = postPath(post);

  if (path !== `/posts/${encodeURIComponent(decodeURIComponent((await params).slug))}`) {
    permanentRedirect(path);
  }

  return <PostArticle post={post} locale={post.locale} />;
}

async function loadPost(params: Params) {
  const slug = canonicalPostSlug(decodeURIComponent(params.slug));
  return getPublishedPostByAnyLocaleSlugOrCanonicalSlug(slug);
}
