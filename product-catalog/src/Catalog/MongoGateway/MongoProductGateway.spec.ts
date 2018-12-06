import { MongoProductGateway } from './MongoProductGateway';
import { Product } from '../../shared/Product';

describe('MongoProductGateway', () => {
  let gateway: MongoProductGateway;
  beforeAll(async () => {
    gateway = await MongoProductGateway.build(global['__MONGO_URI__']);
  });
  it('should return a Product', async () => {
    const product = await gateway.addProduct('My Prod', 1337);
    expect(product).toBeInstanceOf(Product);
  });
  afterAll(async () => {
    gateway.disconnect();
  });
});
