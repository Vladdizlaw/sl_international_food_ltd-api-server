import { Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import { InjectConnection } from 'nest-knexjs'
import { CreateAccountDto } from './dto/create-account.dto'
import { UpdateAccountDto } from './dto/update-account.dto'

@Injectable()
export class AccountRepository {
	constructor(@InjectConnection() private readonly knex: Knex) { }

	async findAll({filters}) {
		const accounts = this.knex.table('accounts')
			.select([
				'accounts.id',
				'accounts.name',
				'accounts.company',
				'accounts.email',
				'accounts.phone',
				'accounts.status_id',
				'accounts.role',
				'accounts.billing_address',
				'accounts.delivery_address',
				'accounts.created_at'
			])
			.count('orders.id as all_orders')
			.count('orders.total_amount as order_total')
			.leftJoin('orders', 'orders.account_id', 'accounts.id')
			.groupBy('accounts.id')

		return accounts
	}

	async findById(id: number) {
		const account = this.knex.table('accounts').where({ id: id })
		return account
	}

	async findByEmail(email: string) {
		const account = this.knex.table('accounts').where({ email })
		return account
	}

	async create(dto: CreateAccountDto) {
		const accountDto = { ...dto }

		try {
			const account = this.knex
				.table('accounts')
				.insert(accountDto)
				.returning('*')
			return account
		} catch (error) {
			throw new Error(error)
		}
	}

	async delete(id: number) {
		const account = this.knex.table('accounts').delete().where({ id })
		return account
	}

	async update(id: number, dto: UpdateAccountDto) {
		try {
			const account = this.knex('accounts')
				.update(dto)
				.returning('*')
				.where({ id })
			return account
		} catch (error) {
			throw new Error(error)
		}
	}
}
