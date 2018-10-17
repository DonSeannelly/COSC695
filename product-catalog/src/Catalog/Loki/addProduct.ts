import { format } from './LokiDocumentMapper';
import { Product } from '../../shared/Product';
import * as loki from 'lokijs';

export function addProduct(db: loki, name: string, price: number): Promise<Product> {
  const doc = this.db.getCollection('products').insertOne({ name, price });
  if (doc === undefined) {
    throw new Error('Failed to insert product into the database');
  }
  return Promise.resolve(format(doc));
}