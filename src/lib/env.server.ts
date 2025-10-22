import "server-only";
import * as v from "valibot";

const serverSchema = v.object({
  // Database
  DATABASE_URL: v.pipe(v.string(), v.minLength(1, "DATABASE_URL is required")),

  // BetterAuth
  BETTER_AUTH_SECRET: v.pipe(
    v.string(),
    v.minLength(32, "BETTER_AUTH_SECRET must be at least 32 characters"),
  ),
  BETTER_AUTH_URL: v.pipe(
    v.string(),
    v.url(),
    v.minLength(1, "BETTER_AUTH_URL is required"),
  ),

  // Email Configuration (for authentication emails)
  SMTP_HOST: v.optional(v.string()),
  SMTP_PORT: v.optional(v.pipe(v.string(), v.transform(Number))),
  SMTP_USER: v.optional(v.string()),
  SMTP_PASS: v.optional(v.string()),
  SMTP_FROM: v.optional(v.pipe(v.string(), v.email())),
  MAILERSEND_API_KEY: v.optional(v.string()),

  // Node environment
  NODE_ENV: v.optional(
    v.picklist(["development", "production", "test"]),
    "development",
  ),
});

function validateServerEnv() {
  try {
    return v.parse(serverSchema, {
      DATABASE_URL: process.env.DATABASE_URL,
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
      BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      SMTP_FROM: process.env.SMTP_FROM,
      MAILERSEND_API_KEY: process.env.MAILERSEND_API_KEY,
      NODE_ENV: process.env.NODE_ENV,
    });
  } catch (error) {
    console.error("❌ Server environment validation failed:");
    if (v.isValiError(error)) {
      for (const issue of error.issues) {
        console.error(
          `  - ${issue.path?.map((p) => p.key).join(".") || "root"}: ${issue.message}`,
        );
      }
    }
    console.error(
      "\n📝 Check your .env.local file and ensure all required variables are set.",
    );
    throw new Error("Invalid server environment variables");
  }
}

export const serverEnv = validateServerEnv();

export type ServerEnv = typeof serverEnv;
