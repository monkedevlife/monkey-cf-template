import { serverEnv } from "@/lib/env.server";
import {
  drizzle as neonDrizzle,
  type NeonHttpDatabase,
} from "drizzle-orm/neon-http";
import {
  drizzle as pgDrizzle,
  type PostgresJsDatabase,
} from "drizzle-orm/postgres-js";
import * as schema from "./schema";

// Check if we're in local development (localhost postgres)
const isLocal = serverEnv.NODE_ENV === "development";

function createDatabase():
  | NeonHttpDatabase<typeof schema>
  | PostgresJsDatabase<typeof schema> {
  if (isLocal) {
    // Use normal postgres driver for local development
    const postgres = require("postgres");

    const sql = postgres(serverEnv.DATABASE_URL, { schema });
    return pgDrizzle(sql);
  } else {
    // For Synchronus usage with Neon
    // import { neon } from '@neondatabase/serverless';
    // import { drizzle } from 'drizzle-orm/neon-http';
    // Use Neon for production/serverless
    return neonDrizzle(serverEnv.DATABASE_URL, { schema });
  }
}

// Depending on the environment, set the database type NeonHttpDatabase<typeof schema>
export const db = createDatabase() as
  | PostgresJsDatabase<typeof schema>
  | NeonHttpDatabase<typeof schema>;
