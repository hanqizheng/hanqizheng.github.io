import { createApiPost, getPostBySlugOrCanonicalSlug } from "@/lib/posts";
import { canonicalPostSlug, slugify } from "@/lib/slug";
import { z } from "zod";

export const dynamic = "force-dynamic";

const createPostSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  excerpt: z.string().nullable().optional(),
  contentMarkdown: z.string().min(1),
  status: z.enum(["draft", "published"]).optional(),
  publishedAt: z.string().datetime().or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).optional()
});

export async function POST(request: Request) {
  const expectedToken = process.env.BLOG_WRITE_TOKEN;
  const authHeader = request.headers.get("authorization") ?? "";

  if (!authHeader.startsWith("Bearer ")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!expectedToken) {
    return Response.json({ error: "BLOG_WRITE_TOKEN is not configured" }, { status: 500 });
  }

  if (authHeader !== `Bearer ${expectedToken}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = createPostSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return Response.json({ error: "Invalid request body", details: parsed.error.flatten() }, { status: 400 });
  }

  const body = parsed.data;
  const slug = body.slug ?? slugify(body.title);
  const existing = await getPostBySlugOrCanonicalSlug(canonicalPostSlug(slug));

  if (existing) {
    return Response.json({ error: "A post with this slug already exists" }, { status: 409 });
  }

  const post = await createApiPost({
    title: body.title,
    slug,
    author: body.author ?? "Qizheng Han",
    excerpt: body.excerpt ?? null,
    contentMarkdown: body.contentMarkdown,
    status: body.status ?? "published",
    publishedAt: normalizePublishedAt(body.publishedAt)
  });

  return Response.json({ post }, { status: 201 });
}

function normalizePublishedAt(value: string | undefined) {
  if (!value) {
    return new Date().toISOString();
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return `${value}T00:00:00.000Z`;
  }

  return new Date(value).toISOString();
}
