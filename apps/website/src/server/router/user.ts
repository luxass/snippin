
import { TRPCError } from '@trpc/server';

import { createRouter } from './context';

export const userRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next();
  })
  .query('getUser', {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findUnique({
        where: {
          id: ctx.session?.user?.id
        }
      });
    }
  });
