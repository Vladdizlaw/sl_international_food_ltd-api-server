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
      const account = this.knex
        .table('orders')
        .select(['orders.*',
          this.knex
            .raw("ARRAY_AGG(json_build_object('orders_items')) as items")])
        .leftJoin('orders_items', "order_items.order_id", 'orders.id')
        .where('orders.id', id);

      return account
    } catch (error) {
      console.error(error);
    }

  }
  async findByAccountId(account_id: string) {
    try {
      const account = this.knex.table('orders')
        .select(['orders.*'])
        .where('orders.account_id', account_id);
      return account
    } catch (error) {
      console.error(error);
    }

  }

  async create(dto) {
    const order = this.knex.table('orders').insert(dto)
    return order
  }

}