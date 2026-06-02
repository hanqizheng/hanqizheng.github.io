import type { PostRecord } from "@/lib/db";
import { DEFAULT_LOCALE, getDictionary, localePath, type Locale } from "@/lib/i18n";
import { canonicalPostSlug } from "@/lib/slug";

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanqizheng.vercel.app";
}

export function postPath(post: Pick<PostRecord, "locale" | "slug">, locale: Locale = post.locale ?? DEFAULT_LOCALE) {
  return localePath(locale, `/posts/${encodeURIComponent(canonicalPostSlug(post.slug))}`);
}

export function formatDisplayDate(value: string | null, locale: Locale = DEFAULT_LOCALE) {
  if (!value) {
    return getDictionary(locale).posts.draft;
  }

  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(value));
}
