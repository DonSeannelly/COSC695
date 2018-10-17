interface ProductDocument {
  name: string;
  price: number;
  meta: {};
  $loki: number;
}
export function format(doc: ProductDocument) {
  return {
    id: doc.$loki.toString(),
    name: doc.name,
    price: doc.price,
  };
}
