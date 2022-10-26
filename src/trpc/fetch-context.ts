import { inferAsyncReturnType } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
export function createContext({ req }: FetchCreateContextFnOptions) {
  const user = { name: req.headers.get("username") ?? "anonymous" };
  return { req, user };
}
export type Context = inferAsyncReturnType<typeof createContext>;
