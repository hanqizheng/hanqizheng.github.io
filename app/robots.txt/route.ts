import { siteUrl } from "@/lib/urls";

export const dynamic = "force-static";

export function GET() {
  const baseUrl = siteUrl();

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", baseUrl).toString()}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
