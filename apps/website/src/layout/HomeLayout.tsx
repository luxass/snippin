import { PropsWithChildren } from 'react';

import Header from '@components/Header';

interface Props {}

export default function HomeLayout({ children }: PropsWithChildren<Props>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#121B67] to-[#76030F]">
      <Header />
      {children}
    </div>
  );
}
