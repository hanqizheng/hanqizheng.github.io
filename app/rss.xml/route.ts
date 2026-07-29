import { listCachedAllPublishedPosts } from "@/lib/cached-posts";
import { postPath, siteUrl } from "@/lib/urls";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = await listCachedAllPublishedPosts();
  const baseUrl = siteUrl();

  const items = posts
    .map((post) => {
      const url = new URL(postPath(post), baseUrl).toString();
      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid>${url}</guid>`,
        post.published_at ? `<pubDate>${new Date(post.published_at).toUTCString()}</pubDate>` : "",
        post.excerpt ? `<description>${escapeXml(post.excerpt)}</description>` : "",
        "</item>"
      ].join("");
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>「Handler」</title><link>${baseUrl}</link><description>物华天宝，龙光射牛斗之墟。</description>${items}</channel></rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8"
      }
    }
  );
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
