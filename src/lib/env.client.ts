import "client-only";
import * as v from "valibot";

const clientSchema = v.object({
  NEXT_PUBLIC_APP_URL: v.pipe(
    v.string(),
    v.url(),
    v.minLength(1, "NEXT_PUBLIC_APP_URL is required"),
  ),
});

function validateClientEnv() {
  try {
    return v.parse(clientSchema, {
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    });
  } catch (error) {
    console.error("❌ Client environment validation failed:");
    if (v.isValiError(error)) {
      for (const issue of error.issues) {
        console.error(
          `  - ${issue.path?.map((p) => p.key).join(".") || "root"}: ${issue.message}`,
        );
      }
    }
    throw new Error("Invalid client environment variables");
  }
}

export const clientEnv = validateClientEnv();

export type ClientEnv = typeof clientEnv;
