import { useState } from "preact/hooks";
import {trpc} from '@/src/trpc/client.ts'

export default function TrpcPlayground() {
  const [greeting, setGreeting] = useState('');

 trpc.hello.query('World')
 .then(res => setGreeting(res));

  return (
    <div>
        {greeting}
    </div>
  );
}
