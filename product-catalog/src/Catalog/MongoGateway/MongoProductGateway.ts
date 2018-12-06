import { ProductGateway } from '../ProductGateway';
import { Product } from '../../shared/Product';
import { MongoClient, Collection } from 'mongodb';

export class MongoProductGateway implements ProductGateway {
  products: Collection;
  private constructor(private client: MongoClient) {
    this.products = this.client.db().collection('products');
  }

  static async build(uri: string): Promise<MongoProductGateway> {
    try {
      const client = await MongoClient.connect(uri);
      return new MongoProductGateway(client);
    } catch (e) {
      console.log(e);
    }
  }
  disconnect() {
    this.client.close();
  }
  async addProduct(name: string, price: number): Promise<Product> {
    return this.products.insertOne({ name, price })
      .then((result) => {
        return new Product(result.insertedId.toHexString(), name, price);
      })
      .catch((e) => {
        console.log(e);
        throw new Error(`Failed to Insert Product: ${name}`);
      });
  }
  getProduct(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  updateProduct(id: string, name: string, price: number): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  deleteProduct(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

abstract class MongoGateway {

}