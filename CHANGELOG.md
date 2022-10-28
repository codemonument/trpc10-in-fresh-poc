# Changelog

## Next  

- Change page title

## 2.2.0 - 2022-10-26 

- Cleanup old & unneeded Files 🗑
- Improve Styling to be presentable in Blogpost ✨

## 2.1.0 - 2022-10-26 

- Fixed deno-deploy deployment at https://trpc10-in-fresh.deno.dev/, 
  by using window.location.origin for creating the trpc client, instead of hardcoding localhost:8000

## 2.0.0 - 2022-10-26 

Second working trpc v10 integration! 

Method: 
1. Update the server.ts like described by the trpc `fetch` adapter developed for cloudflare workers. 
   Instructions: https://trpc.io/docs/v10/fetch
2. Write a fresh route at `/routes/trpc/[...path].ts`, with two request handlers for GET and POST.
   Instructions: https://fresh.deno.dev/docs/getting-started/custom-handlers 

   Note: The `[...path].ts` is required for fresh to pass the full path after /trpc to the trpc handler
3. Call the `fetchRequestHandler` from `@trpc/server/adapters/fetch` for both handlers like this: 

   ```
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

   ```

## 1.0.0 - 2022-10-26

First working trpc v10 integration! 

Method: 
1. Start an opine server (deno express clone) besides the fresh server
   1. Running fresh on port 8000 
   2. Running opine with trpc on port 3000 
2. Configuring the trpc client to directly use the trpc endpoint on opine (Port 3000)

## 2022-10-26-first-try-api-route-fix

Fixes the fresh route for trpc from /api/trpc to /trpc

## 2022-10-26-first-try-createExpressMiddleware

The first tag with trpc set up together with the createExpressMiddleware adapter