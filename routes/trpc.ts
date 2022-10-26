import { HandlerContext, Handlers } from "$fresh/server.ts";

/**
 * NOTE: This route is currently not used in V1.0.0
 * TRPC Client is configured to directly connect to localhost:3000/trpc, which is the endpoint of the additional opine server
 */
export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext) {
    const trpcReq = new Request("http://localhost:3000/trpc", _req);
    const trpcResponse = await fetch(trpcReq);
    return trpcResponse;
  },
  async POST(_req: Request, ctx: HandlerContext) {
    const trpcReq = new Request("http://localhost:3000/trpc", _req);
    const trpcResponse = await fetch(trpcReq);
    return trpcResponse;
  },
};
