# Handler blog repository guidance

## Scope

This is a Next.js App Router personal blog backed by Markdown and Supabase Postgres. Git-tracked Markdown is the authoring source; production reads use server-side Supabase access and published-post RLS.

## Source map

- Author content lives in `content/posts/`. New posts are bilingual `.zh.md` / `.en.md` pairs with a stable `translationKey`.
- Shared read selection lives in `lib/posts.ts`; Markdown fallback is in `lib/local-posts.ts`; database reads are in `lib/postgres-posts.ts` and `lib/db.ts`.
- Localized routes and rendering live under `app/` and `app/_localized/`; URL generation belongs in `lib/urls.ts` and slug behavior in `lib/slug.ts`.
- Database migrations live in `supabase/migrations/`; content synchronization and validation live in `scripts/`.
- `app/api/posts/route.ts` is the trusted automation publishing path; `app/api/cron/keep-alive/route.ts` owns the authenticated keep-alive request.
- Deployment and publishing behavior is documented in `README.md`.

## Commands

- `pnpm install` — install dependencies.
- `pnpm dev` — start local development.
- `pnpm validate:content` — validate Markdown metadata and translation relationships.
- `pnpm lint` — ESLint with zero warnings.
- `pnpm build` — production build.
- `pnpm db:local:up` / `pnpm db:local:down` — manage the local Postgres service.
- `pnpm db:migrate` — apply migrations.
- `pnpm sync:posts` — synchronize Markdown into the configured database.

## Change rules

- Preserve raw Markdown fidelity, including whitespace, code blocks, tables, and indentation.
- Keep localized canonical URLs and legacy redirects aligned when changing slugs, routing, RSS, sitemap, or metadata.
- Never expose `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`, `BLOG_WRITE_TOKEN`, or `CRON_SECRET` to client code or `NEXT_PUBLIC_*` variables.
- `public.posts` must keep RLS enabled. Anonymous/authenticated roles may read only `status = 'published'`; public writes remain forbidden and server-side writes use the service role or migration connection.
- Schema changes require a migration and README updates when setup or deployment behavior changes.
- Do not treat the local Markdown fallback as proof that the production Supabase path works.

## Validation

- For content changes, run `pnpm validate:content`, `pnpm lint`, and the relevant page build/render check.
- For database or RLS changes, verify policies and grants directly, then confirm published content still serves through the application.
- For routing/SEO changes, verify canonical localized URLs, redirects, sitemap, RSS, and both languages.
