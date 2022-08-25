import { PropsWithChildren } from 'react';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { trpc } from '@lib/trpc';

interface Props {}

export default function NewSnippetLayout({ children }: PropsWithChildren<Props>) {
  const { data: session } = trpc.useQuery(['session.getSession']);
  const { data: user } = trpc.useQuery(['user.getUser']);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-indigo-500 to-purple-500">
      <Header />
      <div className="flex h-[calc(100vh-64px)] flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-2">
          {children} {JSON.stringify(session, null, 2)} {JSON.stringify(user, null, 2)}
        </main>
      </div>
    </div>
  );
}
