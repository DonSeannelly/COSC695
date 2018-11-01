import { DataStore } from '../DataStore';
import * as loki from 'lokijs';
import { Order } from '../../shared/Order';

export class LokiConnector implements DataStore {
  db: loki;

  constructor() {
    this.db = new loki('db.json');
    if (this.db.getCollection('orders') === null) {
      this.db.addCollection('orders');
    }
  }
  createOrder(productID: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  getOrder(id: string): Promise<Order> {
    throw new Error('Method not implemented.');
  }
  deleteOrder(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
