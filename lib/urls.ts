import type { PostRecord } from "@/lib/db";
import { canonicalPostSlug } from "@/lib/slug";

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanqizheng.vercel.app";
}

export function postPath(post: Pick<PostRecord, "published_at" | "slug">) {
  return `/posts/${encodeURIComponent(canonicalPostSlug(post.slug))}`;
}

export function formatDisplayDate(value: string | null) {
  if (!value) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(value));
}
