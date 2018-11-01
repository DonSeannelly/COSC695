import { Express, Response, Request, Router } from 'express';
import { Context } from './OrderModule';
import { createOrder, getOrder, deleteOrder } from './OrderInteractor';

export function buildOrderRouter(app: Express) {
  app.use('/orders', ORDER_ROUTER);
}
const ORDER_ROUTER = (() => {
  const context = Context;
  const router = Router();
  router.route('/')
    .post(async (req: Request, res: Response) => {
      try {
        const productID = req.body.productID;
        const product = await createOrder(context, productID);
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
        const product = await getOrder(context, id);
        res.json(product);
      } catch (e) {
        handleError(e, res);
      }
    })
    .delete(async (req: Request, res: Response) => {
      try {
        const orderID = req.params.id;
        await deleteOrder(context, orderID);
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
