import NewSnippetLayout from "@layout/NewSnippetLayout";
import { trpc } from '@lib/trpc';


export default function New() {
  const { data: session } = trpc.useQuery(['session.getSession']);

  return (
    <NewSnippetLayout>
      <p>Hello</p>
    </NewSnippetLayout>
  );
}
