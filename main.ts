/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { opineServer } from "./src/trpc/opine-server.ts";

// TODO: Cleanup when :8000/trpc route is working!
// Deactivated for testing with trpc fetch adapter
// const opinePort = 3000;
// opineServer.listen(opinePort, () => {
//   console.log(`TRPC V10 listening on Opine Server at port: ${opinePort}`);
// });

await start(manifest);
