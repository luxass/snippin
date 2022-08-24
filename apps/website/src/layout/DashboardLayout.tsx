import { PropsWithChildren } from 'react';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { trpc } from '@lib/trpc';

interface Props {}

export default function DashboardLayout({ children }: PropsWithChildren<Props>) {
  const { data: session } = trpc.useQuery(['session.getSession']);
  return (
    <div className="min-h-screen bg-gradient-to-bl from-indigo-500 to-purple-500">
      <Header />
      <div className="flex h-[calc(100vh-64px)] flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-2">{children}</main>
      </div>
    </div>
  );
}
