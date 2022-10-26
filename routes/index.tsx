import { Head } from "$fresh/runtime.ts";
import TrpcPlayground  from "../islands/TrpcPlayground.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link href="https://unpkg.com/open-props" rel="stylesheet"></link>
        <link href="./global.css" rel="stylesheet"></link>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`.
        </p>

        <h2>TRPC Playground - Island</h2>
        <TrpcPlayground></TrpcPlayground>
      </div>
    </>
  );
}
