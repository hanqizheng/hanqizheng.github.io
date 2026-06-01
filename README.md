# 「Handler」

Minimal personal blog built with Next.js App Router and Supabase Postgres.

## Write and publish

Create a Markdown file under `content/posts`:

```md
---
title: "My post"
slug: "my-post"
author: "Qizheng Han"
publishedAt: "2026-06-01"
status: "published"
excerpt: "Short summary"
---

Raw Markdown content goes here.
```

Publish through Git:

```bash
git add content/posts/2026-06-01-my-post.md
git commit -m "Add blog post"
git push
```

GitHub Actions syncs Markdown into Supabase. The Markdown body is stored as raw text in `content_markdown`; whitespace, newlines, indentation, tables, and code blocks are preserved.

Published posts use canonical URLs like `/posts/my-post`. Legacy Jekyll-style URLs such as `/2026/06/01/MyPost.html` redirect permanently to the canonical post URL.

## Development

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Environment variables:

- `NEXT_PUBLIC_SITE_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `BLOG_WRITE_TOKEN`
- `DATABASE_URL` only when running SQL migrations with `psql`

## API publishing

`POST /api/posts` is the auxiliary publishing path for trusted automation.

```bash
curl -X POST "$SITE_URL/api/posts" \
  -H "Authorization: Bearer $BLOG_WRITE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","contentMarkdown":"# Hello\n\nRaw markdown."}'
```

The OpenAPI schema is available at `/openapi.json`.
