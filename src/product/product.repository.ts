import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  public products = [];

  setProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }
}
