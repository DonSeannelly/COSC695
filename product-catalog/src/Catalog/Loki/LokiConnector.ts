import { DataStore } from '../DataStore';
import * as loki from 'lokijs';
import { Product } from '../../shared/Product';
import { getProduct } from './getProduct';
import { addProduct } from './addProduct';
import { deleteProduct } from './deleteProduct';
import { updateProduct } from './updateProduct';

export class LokiConnector implements DataStore {
  db: loki;

  constructor() {
    this.db = new loki('db.json');
    if (this.db.getCollection('products') === null) {
      this.db.addCollection('products');
    }
  }
  getProduct(id: string): Promise<Product> {
    return getProduct(this.db, id);
  }
  addProduct(name: string, price: number): Promise<Product> {
    return addProduct(this.db, name, price);
  }
  updateProduct(id: string, name: string, price: number): Promise<Product> {
    return updateProduct(this.db, id, name, price);
  }
  deleteProduct(id: string): Promise<boolean> {
    return deleteProduct(this.db, id);
  }
}
