import superjson from 'superjson';

import { createRouter } from './context';
import { sessionRouter } from './session';
import { userRouter } from "./user";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('session.', sessionRouter)
  .merge('user.', userRouter);

export type AppRouter = typeof appRouter;
