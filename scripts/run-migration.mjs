import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
const migrationPaths = process.argv[2] ? [process.argv[2]] : listMigrationPaths();

if (!connectionString) {
  throw new Error("DATABASE_URL must be configured.");
}

const pool = new Pool({
  connectionString,
  ssl: postgresNeedsSsl(connectionString) ? { rejectUnauthorized: false } : undefined
});

try {
  for (const migrationPath of migrationPaths) {
    await pool.query(readFileSync(migrationPath, "utf8"));
    console.log(`Applied ${migrationPath}.`);
  }
} finally {
  await pool.end();
}

function listMigrationPaths() {
  const migrationDir = join(process.cwd(), "supabase", "migrations");
  return readdirSync(migrationDir)
    .filter((file) => file.endsWith(".sql"))
    .sort()
    .map((file) => join(migrationDir, file));
}

function postgresNeedsSsl(value) {
  return /supabase\.(co|com)|pooler\.supabase\.com|sslmode=require/.test(value);
}
