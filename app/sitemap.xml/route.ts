import { listPublishedPosts } from "@/lib/posts";
import { postPath, siteUrl } from "@/lib/urls";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = siteUrl();
  const posts = await listPublishedPosts();
  const urls = ["/", "/about", ...posts.map(postPath)]
    .map((path) => `<url><loc>${new URL(path, baseUrl).toString()}</loc></url>`)
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
