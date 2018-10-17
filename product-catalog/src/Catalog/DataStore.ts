import { Product } from '../shared/Product';

export interface DataStore {
  addProduct(name: string, price: number): Promise<Product>;
  getProduct(id: string): Promise<Product>;
  updateProduct(id: string, name: string, price: number): Promise<Product>;
  deleteProduct(id: string): Promise<boolean>;
}
