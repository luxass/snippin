import { GetServerSidePropsContext } from 'next';
import { Input } from 'ui';

import DashboardLayout from '@layout/DashboardLayout';
import { getAuthSession } from '@lib/auth';
import { trpc } from '@lib/trpc';
import { withTRPC } from '@trpc/next';

export default function Settings() {
  const { data: settings } = trpc.useQuery(['user.getSettings']);
  return (
    <DashboardLayout>
      {JSON.stringify(settings, null, 2)}
      <Input />
      <p>You can view this page because you are signed in.</p>
    </DashboardLayout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      session: session
    }
  };
}
