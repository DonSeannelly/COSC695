import { Response, Request, Router } from 'express';
import { Context } from './CatalogModule';
import { addProduct, getProduct } from './CatalogInteractor';

export const CatalogRouter = (() => {
  const context = Context;
  const router = Router();
  router.route('/')
    .post(async (req: Request, res: Response) => {
      try {
        const name = req.body.name;
        const price = req.body.price;
        const product = await addProduct(context, name, price);
        res.json(product);
      } catch (e) {
        console.log(e);
        res.status(500).json({
          message: 'Internal Server Error',
        });
      }
    })
    .get((req: Request, res: Response) => {
      res.json('Hello world');
    });
  router.route('/:id')
    .get(async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const product = await getProduct(context, id);
        res.json(product);
      } catch (e) {
        console.log(e);
        res.status(500).json({
          message: 'Internal Server Error',
        });
      }
    })
    .patch((req: Request, res: Response) => {
      res.send(`Update Product #${req.params.id}`);
    })
    .delete((req: Request, res: Response) => {
      res.send(`Delete Product #${req.params.id}`);
    });
  return router;
})();
