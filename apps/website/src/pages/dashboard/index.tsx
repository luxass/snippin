import { GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/react";
import { getAuthSession } from "../../lib/auth";

export default function Dashboard() {
  const { data, status } = useSession()

  // if (status === "loading") {
  //   return <p>Loading...</p>
  // }

  // if (status === "unauthenticated") {
  //   return <p>Access Denied</p>
  // }

  if (!data) {
    return <p>No data</p>
  }

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      session: await getAuthSession(ctx),
    },
  };
};