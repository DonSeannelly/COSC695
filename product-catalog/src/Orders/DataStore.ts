import { Order } from '../shared/Order';

export interface DataStore {
  createOrder(productID: string): Promise<Order>;
  getOrder(id: string): Promise<Order>;
  deleteOrder(id: string): Promise<boolean>;
}
