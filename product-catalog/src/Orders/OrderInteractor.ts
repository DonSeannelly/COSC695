import { Order } from '../shared/Order';
import { OrdersGateway } from './OrdersGateway';

interface Context {
  dataStore: OrdersGateway,
}

export async function createOrder(context: Context, productID: string, userID: string): Promise<Order> {
  throw new Error('create not implemented');
}

export async function getOrder(context: Context, orderID: string): Promise<Order> {
  throw new Error('get not implemented');
}

export async function getOrdersOfUser(context: Context, userID: string): Promise<Order[]> {
  throw new Error('not implemented');
}

export async function deleteOrder(context: Context, orderID: string) {
  throw new Error('delete not implemented');
}
