
import { OrderRepository } from './order.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    constructor(private readonly OrderRepository: OrderRepository) { }
    async createOrder(){}

}
