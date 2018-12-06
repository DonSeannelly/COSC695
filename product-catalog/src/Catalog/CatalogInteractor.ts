import { Product } from '../shared/Product';
import { ProductGateway } from './ProductGateway';

interface Context {
  dataStore: ProductGateway,
}
export async function addProduct(context: Context, name: string, price: number): Promise<Product> {
  const { dataStore } = context;
  try {
    const product = await dataStore.addProduct(name, price);
    return product;
  } catch (e) {
    throw e;
  }
}
export async function getProduct(context: Context, id: string): Promise<Product> {
  const { dataStore } = context;
  try {
    const product = await dataStore.getProduct(id);
    return product;
  } catch (e) {
    throw e;
  }
}
export async function updateProduct(context: Context, id: string, name: string, price: number): Promise<Product> {
  const { dataStore } = context;
  return dataStore.updateProduct(id, name, price);
}
export function deleteProduct(context: Context, id: string): Promise<boolean> {
  const { dataStore } = context;
  return dataStore.deleteProduct(id);
}
