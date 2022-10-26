// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./server.ts";

// TODO: Find a way to run this code only on client!
// Since this file is imported on the server as well, the global js part
// will simply be executed and will throw errors, bc. the window object on server does not have a location property.
console.log("Origin: ", location?.origin);
const host = location?.origin;

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${host}/trpc`,
    }),
  ],
});
