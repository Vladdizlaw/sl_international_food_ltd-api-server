import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateProductDto } from './dto/create-product.dto';
// import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class ProductRepository {
  constructor(@InjectConnection() private readonly knex: Knex) { }

  async findAll() {
    const products = this.knex.table('products');
    return products
  }

  async findById(id: string) {
    try {
      const product = this.knex.table('products')
        .select(['products.*', 'product_categories.name as category'])
        .leftJoin('product_categories', 'product_categories.id', 'products.category_id')
        .where('products.id', id);
      return product
    } catch (error) {
      console.error(error);
    }

  }

  async getProductCategories() {
    const productCategories = this.knex.table('product_categories')
    return productCategories
  }

  async create (dto:CreateProductDto){
    const product = this.knex.table('products')
      .insert(dto)
      .returning('*')
      return product
  }

}