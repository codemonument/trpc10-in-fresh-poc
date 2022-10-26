import { HandlerContext } from "$fresh/server.ts";
import { trpcExpressMiddleware } from "@/src/trpc/server.ts";

const middlewareType = typeof trpcExpressMiddleware;

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  trpcExpressMiddleware.apply(_req, {
    // TODO: How to mock response object correctly?
    send: () => {
    },
  });
  return new Response("Not yet defined");
};
