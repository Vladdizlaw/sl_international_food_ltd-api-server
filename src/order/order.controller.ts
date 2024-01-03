import { Controller, Get, Post, UseGuards } from '@nestjs/common'
import { OrderService } from './order.service'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'
import { RolesGuard } from 'src/auth/guards/role.guard'
import { Role } from 'src/enum/role.enum'
import { Roles } from 'src/decorators/role.decorator'

@Controller('order')
export class OrderController {
	constructor(private readonly OrderService: OrderService) {}

	@UseGuards(JwtAuthGuard)
	@Roles(Role.Customer)
	@Get()
	async getMyOrders() {}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(Role.Admin)
	@Get('all')
	async getAllOrders() {}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(Role.Customer)
	@Post()
	async createOrder(createOrderDto) {}
}
