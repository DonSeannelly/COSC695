import { Order } from '../shared/Order';

export interface OrdersGateway {
  createOrder(productID: string): Promise<Order>;
  getOrder(id: string): Promise<Order>;
  deleteOrder(id: string): Promise<boolean>;
  getOrdersOfUser(id: string): Promise<Order[]>;
}
