import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createCallerFactory, createTRPCRouter } from "@/server/trpc/init";
import { userRouter } from "@/server/trpc/routers/user";

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
