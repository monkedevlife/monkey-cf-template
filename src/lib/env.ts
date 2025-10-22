/**
 * Environment variables
 *
 * This file re-exports from env.server.ts and env.client.ts for convenience.
 *
 * IMPORTANT:
 * - Use `import { serverEnv } from "@/lib/env.server"` in server-only code
 * - Use `import { clientEnv } from "@/lib/env.client"` in client-only code
 * - Avoid importing from this file to get better tree-shaking and bundling
 */

export type { ClientEnv } from "./env.client";
// Re-export types only to avoid bundling issues
export type { ServerEnv } from "./env.server";
