import { initTRPC } from "@trpc/server";
import { Context } from "./fetch-context.ts";
import { z } from "zod";

const t = initTRPC.context<Context>().create();

// This export is needed for integrating TRPC with Fresh in `/routes/trpc`
// It is only used on the server!
export const appRouter = t.router({
  hello: t.procedure
    .input(z.string())
    .query((req) => {
      return `Hello ${req.input}`;
    }),
});

// This export only export the *type signature* of the trpc router!
// This avoids accidentally importing the full Router into client-side code
export type AppRouter = typeof appRouter;
