import { HandlerContext, Handlers } from "$fresh/server.ts";

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
