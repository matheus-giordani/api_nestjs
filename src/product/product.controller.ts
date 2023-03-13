import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductDTO } from './DTO/Product.dto';
import { ProductRepository } from './product.repository';

@Controller('product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() product: ProductDTO) {
    this.productRepository.setProduct(product);
    return product;
  }

  @Get()
  getProduct() {
    return this.productRepository.products;
  }
}
