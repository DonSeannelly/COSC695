import { Express, Response, Request, Router } from 'express';
import { createOrder, getOrder, deleteOrder } from './OrderInteractor';
import { LokiConnector } from './Loki/LokiConnector';

export function buildOrderRouter(app: Express) {
  app.use('/orders', ORDER_ROUTER);
}
const CONTEXT = {
  dataStore: new LokiConnector(),
};
const ORDER_ROUTER = (() => {
  const router = Router();
  router.route('/')
    .post(async (req: Request, res: Response) => {
      try {
        const productID = req.body.productID;
        const product = await createOrder(CONTEXT, productID);
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
        const product = await getOrder(CONTEXT, id);
        res.json(product);
      } catch (e) {
        handleError(e, res);
      }
    })
    .delete(async (req: Request, res: Response) => {
      try {
        const orderID = req.params.id;
        await deleteOrder(CONTEXT, orderID);
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
