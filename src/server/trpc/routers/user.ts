import { eq } from "drizzle-orm";
import * as v from "valibot";
import { user } from "@/server/db/schema";
import { createTRPCRouter, publicProcedure } from "@/server/trpc/init";

export const userRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.select().from(user);
  }),

  getById: publicProcedure
    .input(v.object({ id: v.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.select().from(user).where(eq(user.id, input.id));
    }),

  create: publicProcedure
    .input(
      v.object({
        email: v.pipe(v.string(), v.email()),
        name: v.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db
        .insert(user)
        .values({
          id: crypto.randomUUID(),
          ...input,
        })
        .returning();
    }),
});
