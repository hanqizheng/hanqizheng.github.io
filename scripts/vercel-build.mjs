import { spawnSync } from "node:child_process";

const isProduction = process.env.VERCEL_ENV === "production";

if (isProduction) {
  run("pnpm", ["db:migrate"]);
} else {
  console.log(`Skipping database migrations for VERCEL_ENV=${process.env.VERCEL_ENV ?? "local"}.`);
}

run("pnpm", ["build"]);

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32"
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
