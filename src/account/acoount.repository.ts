import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountRepository {
  constructor(@InjectConnection() private readonly knex: Knex) { }
  async findAll() {
    const accounts =  this.knex.table('accounts');
    return accounts;
  }
  async findById(id: string) {
    
    const accounts = this.knex.table('accounts').where({ id });
    return accounts;
  }
  async create(dto: CreateAccountDto) {
    const account =  this.knex.table('accounts').insert(dto);
    return account
  }
}