import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountRepository {
  constructor(@InjectConnection() private readonly knex: Knex) { }

  async findAll() {
    const accounts = this.knex.table('accounts');
    return accounts
  }

  async findById(id: number) {
    const account = this.knex.table('accounts').where({ id });
    return account
  }

  async findByLogin(login: string) {
    const account = this.knex.table('accounts').where({ login });
    return account
  }

  async create(dto: CreateAccountDto) {
    const account = this.knex.table('accounts').insert(dto).returning('*');
    return account
  }

  async delete(id: number) {
    const account = this.knex.table('accounts').delete().where({ id });
    return account
  }

  async update({ id, dto, db_transaction }: { id: number, dto: UpdateAccountDto, db_transaction?: Knex.Transaction<any, any[]> }) {
    const trx = db_transaction || await this.knex.transaction()
    try {
      const account =  await trx('accounts').update(dto).returning('*').where({ id });
      db_transaction || console.log(account)
      return account
    } catch (error) {
      trx.rollback()
      throw new Error(error)
    }

  }
}