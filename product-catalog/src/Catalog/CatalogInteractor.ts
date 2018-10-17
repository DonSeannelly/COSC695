import { Context } from '../shared/Context';
import { Product } from '../shared/Product';

export async function addProduct(context: Context, name: string, price: number): Promise<Product> {
  const { dataStore } = context;
  try {
    const product = dataStore.addProduct(name, price);
    return product;
  } catch (e) {
    throw e;
  }
}
export function getProduct(context: Context, id: string): Promise<Product> {
  const { dataStore } = context;
  try {
    const product = dataStore.getProduct(id);
    return product;
  } catch (e) {
    throw e;
  }
}
export function updateProduct(id: string, name: string, price: number): Promise<boolean> {
  throw new Error('Method not implemented.');
}
export function deleteProduct(id: string): Promise<boolean> {
  throw new Error('Method not implemented.');
}