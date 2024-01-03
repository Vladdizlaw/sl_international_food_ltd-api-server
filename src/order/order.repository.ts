import { Injectable } from '@nestjs/common'
import {
	BaseRepositoryService,
	BaseTransaction
} from 'src/base-repository/base-repository.service'
import { OrderItem } from './interfaces/order.interface'
// import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class OrderRepository extends BaseRepositoryService {
	// constructor(@InjectConnection() private readonly knex: Knex) { }
	transacting(trx: BaseTransaction) {
		const orderRepositoryTransaction = new OrderRepository(trx.transaction)
		return orderRepositoryTransaction
	}
	async findAll() {
		const accounts = this.knex.table('orders')
		return accounts
	}

	async findById(id: number) {
		try {
			const account = this.knex
				.table('orders')
				.select([
					'orders.*',
					this.knex.raw("ARRAY_AGG(json_build_object('orders_items')) as items")
				])
				.leftJoin('orders_items', 'order_items.order_id', 'orders.id')
				.where('orders.id', id)

			return account
		} catch (error) {
			console.error(error)
		}
	}

	async findByAccountId(accountId: number) {
		try {
			const account = this.knex
				.table('orders')
				.select(['orders.*'])
				.where('orders.account_id', accountId)
			return account
		} catch (error) {
			console.error(error)
		}
	}

	async create(dto) {
		const order = this.knex.table('orders').insert(dto).returning('*')
		return order
	}

	async findOrderItems(orderId: number): Promise<OrderItem[]> {
		const orderItems = this.knex
			.table('order_items')
			.select(['*'])
			.where('order_id', orderId)
		return orderItems
	}

	async update(id: number, dto) {
		const order = this.knex
			.table('orders')
			.update(dto)
			.where({ id })
			.returning('*')
		return order
	}

	createOrderItem(dto): Promise<OrderItem[]> {
		const orderItem = this.knex.table('order_items').insert(dto).returning('*')
		return orderItem
	}
}
