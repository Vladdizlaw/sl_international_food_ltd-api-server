import { OrderStatuses } from './constants/order-statuses.constant';
import { Order } from './interfaces/order.interface';
import { OrderRepository } from './order.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    constructor(private readonly OrderRepository: OrderRepository,) { }

    async createOrder(dto, accountId) {
        const total_amount = dto.items.reduce((acc, item) => acc += item.amount, 0)
        const orderDto = { ...dto.order, account_id: accountId, status: OrderStatuses.pending, total_amount }
        const result = await this.OrderRepository.transaction(async (trx) => {
            const [order] = await this.OrderRepository.transacting(trx).create(orderDto)
            const orderItemsDto = dto.items.map(item => { return { ...item, account_id: accountId, order_id: order.id } })
            const orderItems = await this.OrderRepository.transacting(trx).createOrderItem(orderItemsDto)
            order['items'] = orderItems
            return order
        })
        return result
    }

    async createOrderItems(orderItemDto) {
        const orderItems = await this.OrderRepository.createOrderItem(orderItemDto)
        return orderItems

    }

    async getCustomerOrders(customerId: number): Promise<Order[]> {
        const orders = await this.OrderRepository.findByAccountId(customerId)
        return orders
    }

    async getOrder(id: number): Promise<Order[]> {
        const order = await this.OrderRepository.findById(id)
        return order
    }

}
