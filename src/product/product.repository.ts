import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
// import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class ProductRepository {
  constructor(@InjectConnection() private readonly knex: Knex) { }

  async findAll() {
    const accounts = this.knex.table('products');
    return accounts
  }

  async findById(id: string) {
    try {
      const account = this.knex.table('products').select(['products.*', 'product_categories.name as category']).leftJoin('product_categories', 'product_categories.id', 'products.category_id').where('products.id', id);
      return account
    } catch (error) {
      console.error(error);
    }

  }

  async getProductCategories() {
    const productCategories = this.knex.table('product_categories')
    console.log(productCategories)
    return productCategories
  }

  // async findByLogin(login: string) {
  //   const account = this.knex.table('accounts').where({ login });
  //   return account
  // }

  // // async create(dto: CreateAccountDto) {
  //   const account = this.knex.table('accounts').insert(dto).returning('*');
  //   return account
  // }

  // async delete(id: string) {
  //   const account = this.knex.table('accounts').delete().where({ id });
  //   return account
  // }
}