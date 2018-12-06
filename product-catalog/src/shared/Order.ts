export class Order {
  constructor(public productID: string, public orderID: string) {
    if (!productID) throw new Error('An order must have a productID to be created.');
    if (!orderID) throw new Error('An order must have an ID to be created.');
  }
}
