import { mockProducts, Product } from '../mockProducts';

export function addProduct(product: Product) {
  mockProducts.push(product);
}
