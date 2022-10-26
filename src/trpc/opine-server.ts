import { opine } from "opine";
import { opineCors } from "cors";
import { trpcExpressMiddleware } from "@/src/trpc/server.ts";

export const opineServer = opine(); // opine is express ported to deno

// apply tRPC router as a middleware
opineServer.use(
  "/trpc",
  trpcExpressMiddleware,
);

opineServer.use(opineCors());
