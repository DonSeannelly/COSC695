import { Response, Request, Router} from 'express';

export const CatalogRouter = (() => {
  const router = Router();
  router.get('/', (req: Request, res: Response) => {
    res.json('Hello world');
  });
  router.route('/:id')
    .post((req: Request, res: Response) => {
      res.send(`Create Product #${req.params.id}`);
    })  
    .get((req: Request, res: Response) => {
      res.send(`Get Product #${req.params.id}`);
    })
    .patch((req: Request, res: Response) => {
      res.send(`Update Product #${req.params.id}`);
    })
    .delete((req: Request, res: Response) => {
      res.send(`Delete Product #${req.params.id}`);
    });
  return router;
})();


  
