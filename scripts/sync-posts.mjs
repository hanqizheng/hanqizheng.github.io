import { createClient } from "@supabase/supabase-js";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { parsePostFile } from "../lib/content-parser.mjs";

const contentDir = join(process.cwd(), "content", "posts");
const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured.");
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

const files = readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .sort();

for (const file of files) {
  const post = parsePostFile(join(contentDir, file));

  if (!post.title) {
    throw new Error(`Missing title in ${post.fileName}`);
  }

  const payload = {
    slug: post.slug,
    title: post.title,
    author: post.author,
    excerpt: post.excerpt,
    content_markdown: post.contentMarkdown,
    status: post.status,
    published_at: post.publishedAt,
    source: "git",
    updated_at: new Date().toISOString()
  };

  const { error } = await supabase.from("posts").upsert(payload, {
    onConflict: "slug"
  });

  if (error) {
    throw new Error(`Failed to sync ${post.fileName}: ${error.message}`);
  }

  console.log(`Synced ${post.fileName}`);
}

console.log(`Synced ${files.length} posts.`);
