// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./server.ts";

/**
 * This guard check for the availability of 'location' is necessary,
 * since location is not defined in global scope on server and crashes on deno deploy.
 */
let host;
if (globalThis.location) {
  console.log("Origin: ", location?.origin);
  host = location?.origin;
}

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${host}/trpc`,
    }),
  ],
});
