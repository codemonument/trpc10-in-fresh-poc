import { HandlerContext, Handlers } from "$fresh/server.ts";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/src/trpc/server.ts";
import { createContext } from "@/src/trpc/fetch-context.ts";

/**
 * NOTE: This route is currently not used in V1.0.0
 * TRPC Client is configured to directly connect to localhost:3000/trpc, which is the endpoint of the additional opine server
 */
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
