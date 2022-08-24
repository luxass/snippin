import DashboardLayout from "@layout/DashboardLayout";
import { trpc } from "@lib/trpc";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { getAuthSession } from "../../lib/auth";

export default function Dashboard() {
  const { data: session } = trpc.useQuery(['session.getSession']);

  if (!session) {
    return <p>No data</p>
  }

  return (
    <DashboardLayout>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </DashboardLayout>
  )
}