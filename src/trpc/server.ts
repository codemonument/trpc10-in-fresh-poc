import { initTRPC } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { Context, createContext } from "./fetch-context.ts";
// import { Context, createContext } from "./express-context.ts";
import { z } from "zod";

const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  hello: t.procedure
    .input(z.string())
    .query((req) => {
      return `Hello ${req.input}`;
    }),
});

// only export *type signature* of router!
// to avoid accidentally importing your API
// into client-side code
export type AppRouter = typeof appRouter;

export const trpcExpressMiddleware = createExpressMiddleware({
  router: appRouter,
  createContext,
});
