import { LOCALES, localeAboutPath, localeHomePath } from "@/lib/i18n";
import { listAllPublishedPosts } from "@/lib/posts";
import { postPath, siteUrl } from "@/lib/urls";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = siteUrl();
  const posts = await listAllPublishedPosts();
  const urls = [
    ...LOCALES.map((locale) => localeHomePath(locale)),
    ...LOCALES.map((locale) => localeAboutPath(locale)),
    ...posts.map((post) => postPath(post))
  ]
    .map((path) => `<url><loc>${new URL(path, baseUrl).toString()}</loc></url>`)
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
