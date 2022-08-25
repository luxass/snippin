import DashboardLayout from '@layout/DashboardLayout';
import { trpc } from '@lib/trpc';

export default function Dashboard() {
  const { data: session } = trpc.useQuery(['session.getSession']);
  if (!session) {
    return <p>No data</p>;
  }

  return (
    <DashboardLayout>
      <p>You can view this page because you are signed in.</p>
    </DashboardLayout>
  );
}
