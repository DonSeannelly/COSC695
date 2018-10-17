import { Product } from '../../shared/Product';
import { format } from './LokiDocumentMapper';
import * as loki from 'lokijs';

export function getProduct(db: loki, id: string): Promise<Product> {
  const parsedID = parseInt(id, 10);
  if (isNaN(parsedID)) {
    throw new Error('Invalid Database id provided.');
  }
  const doc = this.db.getCollection('products').findOne({ $loki: parsedID });
  if (doc === null) {
    throw new Error(`No document with id ${id} found.`);
  }
  return Promise.resolve(format(doc));
}
