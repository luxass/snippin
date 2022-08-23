import { PropsWithChildren } from 'react';

import Header from '@components/Header';

interface Props {}

export default function DashboardLayout({ children }: PropsWithChildren<Props>) {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-indigo-500 to-purple-500">
      <Header />
      {children}
    </div>
  );
}
