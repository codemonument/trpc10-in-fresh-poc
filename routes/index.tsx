import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import TrpcPlayground  from "../islands/TrpcPlayground.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
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
        <TrpcPlayground></TrpcPlayground>
        <Counter start={3} />
      </div>
    </>
  );
}
