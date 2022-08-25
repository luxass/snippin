import NextAuth, { type NextAuthOptions } from 'next-auth';
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github';

import { env } from '@env/server.mjs';
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@server/db/client';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout'
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: 'repo read:user user:email'
        }
      }
    })
  ]
};

export default NextAuth(authOptions);
