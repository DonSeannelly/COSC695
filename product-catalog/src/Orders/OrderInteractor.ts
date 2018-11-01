import { Context } from '../shared/Context';
import { Order } from '../shared/Order';

export async function createOrder(context: Context, productID: string): Promise<Order> {
  throw new Error('create not implemented');
}

export async function getOrder(context: Context, orderID: string): Promise<Order> {
  throw new Error('get not implemented');
}

export async function deleteOrder(context: Context, orderID: string) {
  throw new Error('delete not implemented');
}
