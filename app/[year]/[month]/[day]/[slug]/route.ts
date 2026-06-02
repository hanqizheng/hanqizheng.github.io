import { getPublishedPostByLegacyPath } from "@/lib/posts";
import { postPath } from "@/lib/urls";

export const dynamic = "force-dynamic";

type Params = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export async function GET(request: Request, { params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug).replace(/\.html$/, "");
  const post = await getPublishedPostByLegacyPath({
    year: resolvedParams.year,
    month: resolvedParams.month,
    day: resolvedParams.day,
    slug
  });

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return Response.redirect(new URL(postPath(post), request.url), 301);
}
