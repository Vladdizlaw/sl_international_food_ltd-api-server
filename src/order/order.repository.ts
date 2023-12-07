import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
// import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class OrderRepository {
  constructor(@InjectConnection() private readonly knex: Knex) { }

  async findAll() {
    const accounts = this.knex.table('orders');
    return accounts
  }

  async findById(id: string) {
    try {
      const account = this.knex.table('orders').select(['orders.*']).where('orders.id', id);
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

}