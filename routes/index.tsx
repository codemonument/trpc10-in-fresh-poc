import { Head } from "$fresh/runtime.ts";
import TrpcPlayground from "../islands/TrpcPlayground.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>TRPC in Deno Fresh</title>
        <link rel="stylesheet" href="./open-props@1.4.16/open-props.min.css" />
        <link rel="stylesheet" href="./open-props@1.4.16/normalize.min.css" />
        <link rel="stylesheet" href="./open-props@1.4.16/buttons.min.css" />
        <link rel="stylesheet" href="./global.css"></link>
      </Head>
      <div class="container">
        <div class="logo-container">
          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="welcome">Welcome to `fresh`!</p>
        </div>

        <section>
          <h4>Island "TRPC Playground"</h4>
          <TrpcPlayground></TrpcPlayground>
        </section>
      </div>
    </>
  );
}
