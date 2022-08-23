import { NextFunction, Request, Response } from 'express';

export default function snippinMiddleware(gg: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(gg);
    res.send('hello');
  };
}
