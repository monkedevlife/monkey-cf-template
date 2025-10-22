# AGENTS.md

Quick reference for AI coding agents working in this repository.

## Rules

- Dont run pnpm build, pnpm dev after changes
- Always run pnpm format after changes

## Commands

- **Lint**: `pnpm lint` (Next.js ESLint)
- **Build**: `pnpm build:cf` (for Cloudflare deployment, NOT `pnpm build`)
- **Test**: No test framework configured yet

## Code Style (Biome)

- **Indentation**: Tabs (not spaces)
- **Quotes**: Double quotes
- **Imports**: Auto-organized on save via Biome
- **No comments**: Do not add comments unless explicitly requested

## TypeScript

- Strict mode disabled (`strict: false` in tsconfig.json)
- Path alias: `@/*` maps to `./src/*`
- Import from `@/lib/...`, not relative paths for cross-directory imports

## Validation & Types

- Use **Valibot** for validation (NOT Zod): `v.object()`, `v.string()`, `v.pipe()`, etc.
- tRPC input schemas use Valibot: `.input(v.object({ id: v.string() }))`

## Database (Drizzle ORM)

- Schema uses `text().primaryKey()` for IDs (BetterAuth requirement)
- Use `eq()` from `drizzle-orm` for where clauses
- Access DB via `ctx.db` in tRPC procedures

## Icons & UI

- Use **Heroicons** (NOT Lucide): `import { IconName } from "@heroicons/react/24/outline"`
- ShadCN components with `cn()` utility from `@/lib/utils`
