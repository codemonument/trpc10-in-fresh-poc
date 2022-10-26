import { opine } from "opine";
import { trpcExpressMiddleware } from "@/src/trpc/server.ts";

export const app = opine(); // opine is express ported to deno

// apply tRPC router as a middleware
app.use(
  "/trpc",
  trpcExpressMiddleware,
);
