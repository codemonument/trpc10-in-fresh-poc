import { HandlerContext } from "$fresh/server.ts";
import { trpcExpressMiddleware } from "@/src/trpc/server.ts";
import { resolve } from "https://deno.land/std@0.150.0/path/win32.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const expressHandlerPromise = await new Promise<Response>(
    (resolve, reject) => {
      trpcExpressMiddleware.apply(_req, {
        // TODO: How to mock response object correctly?
        send: (param: string) => {
          resolve(new Response(param));
        },
      });
    },
  );

  return expressHandlerPromise;
};
