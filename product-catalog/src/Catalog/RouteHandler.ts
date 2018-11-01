import { Express, Response, Request, Router } from 'express';
import { Context } from './CatalogModule';
import { addProduct, getProduct, updateProduct, deleteProduct } from './CatalogInteractor';

export function buildCatalogRouter(app: Express) {
  app.use('/products', CATALOG_ROUTER);
}
const CATALOG_ROUTER = (() => {
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
        handleError(e, res);
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
        handleError(e, res);
      }
    })
    .patch(async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const name = req.body.name;
        const price = req.body.price;
        if (!name && !price) throw new Error('A name or price must be provided.');
        await updateProduct(context, id, name, price);
      } catch (e) {
        handleError(e, res);
      }
    })
    .delete(async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        await deleteProduct(context, id);
      } catch (e) {
        handleError(e, res);
      }
    });
  return router;
})();

function handleError(error: Error, res: Response) {
  const message = error.message ? error.message : 'Internal Server Error';
  res.status(500).json({
    message,
  });
}
