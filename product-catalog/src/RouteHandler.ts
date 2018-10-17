import { Response, Request, Router } from 'express';

export const CatalogRouter = Router()
  .get('/', (req: Request, res: Response) => {
    res.send('Hello world');
  });
