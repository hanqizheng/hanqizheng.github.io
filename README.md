# 「Handler」

Minimal personal blog built with Next.js App Router and Supabase Postgres.

## Write and publish

Create Markdown files under `content/posts`. New posts should be written as a bilingual pair:

```text
content/posts/2026-06-01-my-post.zh.md
content/posts/2026-06-01-my-post.en.md
```

The date and base slug identify the same article across languages. Existing legacy files named `YYYY-MM-DD-slug.md` are treated as `zh`, so old content does not need to be renamed immediately.

```md
---
title: "My post"
slug: "my-post"
locale: "en"
translationKey: "my-post"
author: "Qizheng Han"
publishedAt: "2026-06-01"
status: "published"
excerpt: "Short summary"
---

Raw Markdown content goes here.
```

`locale` can be `zh` or `en`. `translationKey` groups translated versions of the same article; keep it identical in both files. If both language versions can share the same URL slug, `translationKey` and `slug` can be the same value. If the English and Chinese URL slugs differ, keep `translationKey` stable so the language switch can redirect readers to the matching translation.

Publish through Git:

```bash
git add content/posts/2026-06-01-my-post.zh.md content/posts/2026-06-01-my-post.en.md
git commit -m "Add blog post"
git push
```

GitHub Actions syncs Markdown into Supabase. The Markdown body is stored as raw text in `content_markdown`; whitespace, newlines, indentation, tables, and code blocks are preserved.

Published posts use canonical URLs like `/zh/posts/my-post` and `/en/posts/my-post`. Legacy URLs such as `/posts/my-post` and `/2026/06/01/MyPost.html` redirect permanently to the canonical localized post URL.

Before syncing bilingual posts to an existing database, apply the migrations in `supabase/migrations` so the `posts` table has `locale` and `translation_key`.

## Development

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

By default, local development falls back to reading Markdown files directly when no database environment is configured. To simulate the production database path locally, use the included Postgres service:

```bash
cp .env.local.example .env.local
pnpm db:local:up
set -a; source .env.local; set +a; pnpm db:migrate
set -a; source .env.local; set +a; pnpm sync:posts
pnpm dev
```

`pnpm db:local:down` stops the local database without deleting its data. The Docker volume is persistent.

Environment variables:

- `NEXT_PUBLIC_SITE_URL`
- `BLOG_DATABASE_PROVIDER`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `BLOG_WRITE_TOKEN`
- `DATABASE_URL` for local Postgres or SQL migrations

## Deployment (Vercel)

The site is server-rendered (App Router) and reads from Supabase at request time, so it runs on Vercel rather than GitHub Pages. Once the repo is connected to Vercel, every push to `master` deploys to production and every pull request gets its own preview deployment — no extra workflow is needed.

One-time setup:

1. **Create the Supabase project** and apply the migrations:

   ```bash
   export DATABASE_URL="postgresql://postgres:<password>@db.<project>.supabase.co:5432/postgres"
   pnpm db:migrate   # runs supabase/migrations/*.sql in order (idempotent)
   ```

   Then seed existing content into the database:

   ```bash
   export SUPABASE_URL="https://<project>.supabase.co"
   export SUPABASE_SERVICE_ROLE_KEY="<service-role-key>"
   pnpm sync:posts
   ```

2. **Connect the repo to Vercel** (Add New → Project → import this repo). Vercel auto-detects Next.js and pnpm; keep the default build (`next build`) and output settings. Set the production branch to `master`.

3. **Set Vercel environment variables** (Project → Settings → Environment Variables, apply to Production and Preview):

   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://hanqizheng.vercel.app` |
   | `SUPABASE_URL` | `https://<project>.supabase.co` |
   | `SUPABASE_SERVICE_ROLE_KEY` | the Supabase service role key |
   | `BLOG_WRITE_TOKEN` | a long random token (only if you use `POST /api/posts`) |

   Leave `BLOG_DATABASE_PROVIDER` unset — it auto-selects `supabase` when `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are present. `DATABASE_URL` is only needed for migrations and the sync script, not for the running site.

4. **Set GitHub Actions secrets** so the content-sync workflow (`.github/workflows/sync-posts.yml`) can write to Supabase (Repo → Settings → Secrets and variables → Actions):

   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

5. **Disable GitHub Pages** for this repo (Settings → Pages → Source: *None*). This repo previously served a static site from `master`; after the Next.js refactor lands, Pages can no longer build it, so production should come from Vercel only.

After the first production deploy, the publishing loop is fully automatic: commit a bilingual Markdown pair under `content/posts`, open a PR (Vercel builds a preview), and merge to `master` — the merge triggers the Vercel production deploy, and the `sync-posts` workflow loads the new Markdown into Supabase.

## API publishing

`POST /api/posts` is the auxiliary publishing path for trusted automation.

```bash
curl -X POST "$SITE_URL/api/posts" \
  -H "Authorization: Bearer $BLOG_WRITE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","contentMarkdown":"# Hello\n\nRaw markdown."}'
```

The OpenAPI schema is available at `/openapi.json`.
