import { Product } from '../../shared/Product';
import * as loki from 'lokijs';

export function updateProduct(db: loki, id: string, name: string, price: number): Promise<Product> {
  throw new Error('Method not implemented.');
}
