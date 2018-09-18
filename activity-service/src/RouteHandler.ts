import { Response, Request, Router } from 'express';

export const ActivityRouter = Router()
  .get('/', (req: Request, res: Response) => {
    res.send('Hello world');
  });
