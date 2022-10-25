import {trpc} from '@/src/trpc/client.ts'

export default async function TrpcPlayground() {
//   const [count, setCount] = useState(props.start);

const result = await trpc.hello.query('World');

  return (
    <div>
        {result}
    </div>
  );
}
