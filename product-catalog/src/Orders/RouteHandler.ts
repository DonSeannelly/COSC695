import { Express, Response, Request, Router } from 'express';
import { createOrder, getOrder, deleteOrder, getOrdersOfUser } from './OrderInteractor';

export function buildOrderRouter(app: Express) {
  app.use('/orders', ORDER_ROUTER);
}
const CONTEXT = {
  dataStore: null,
};
const ORDER_ROUTER = (() => {
  const router = Router();
  router.route('/')
    .post(async (req: Request, res: Response) => {
      try {
        const productID = req.body.productID;
        const userID = req.body.userID;
        const product = await createOrder(CONTEXT, productID, userID);
        res.json(product);
      } catch (e) {
        handleError(e, res);
      }
    });
  router.route('/:id')
    .get(async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const order = await getOrder(CONTEXT, id);
        res.json(order);
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
  router.get('/users/:user_id/orders', async (req: Request, res: Response) => {
    try {
      const userID = req.params.user_id;
      const orders = await getOrdersOfUser(CONTEXT, userID);
      res.json(orders);
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
