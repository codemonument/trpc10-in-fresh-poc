import { HandlerContext, Handlers } from "$fresh/server.ts";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/src/trpc/server.ts";
import { createContext } from "@/src/trpc/fetch-context.ts";

export const handler: Handlers = {
  GET(_req: Request, ctx: HandlerContext) {
    return fetchRequestHandler({
      endpoint: "/trpc",
      req: _req,
      router: appRouter,
      createContext,
    });
  },
  POST(_req: Request, ctx: HandlerContext) {
    return fetchRequestHandler({
      endpoint: "/trpc",
      req: _req,
      router: appRouter,
      createContext,
    });
  },
};
