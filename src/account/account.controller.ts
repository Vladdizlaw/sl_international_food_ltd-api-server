import { AccountService } from './account.service'
import {
	Controller,
	Post,
	Body,
	Patch,
	Param,
	Get,
	Query,
	HttpException,
	HttpStatus,
	Delete,
	UseGuards,
	Put
} from '@nestjs/common'
import { CreateAccountDto } from './dto/create-account.dto'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'
import { RequestUser } from 'src/decorators/request-user.decorator'
import { Roles } from 'src/decorators/role.decorator'
import {
	Pagination,
	PaginationParams
} from 'src/decorators/pagination-params.decorator'
import { Role } from 'src/enum/role.enum'
import { RolesGuard } from 'src/auth/guards/role.guard'
import { Account } from './interfaces/account.interface'
import { RequestAccount } from 'src/auth/interfaces/request-user.interface'
import { UpdateAccountDto } from './dto/update-account.dto'
import { PaginatedResource } from 'src/interfaces/paginated-resourse.interface'
import { Filtering, FilteringParams } from 'src/decorators/filtering-params.decorator'
import { SearchingParams } from 'src/decorators/search-params.decorator'
@Controller('account')
export class AccountController {
	constructor(private readonly AccountService: AccountService) { }

	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(Role.Admin)
	@Get()
	async getAll(
		@PaginationParams() paginationParams: Pagination,
		@FilteringParams(['name', 'id', 'company', 'email', 'status_id', 'phone']) filterParams?: Filtering,
		@SearchingParams() searchParams?: string
	): Promise<PaginatedResource<Account[]>> {
		const data = await this.AccountService.findAllAccounts(paginationParams, filterParams, searchParams)
		if (!data.items) {
			throw new HttpException('Accounts not found', HttpStatus.NOT_FOUND)
		}
		return { ...data, page: paginationParams.page, size: paginationParams.size }
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(Role.Admin, Role.Customer)
	@Get(':id')
	async get(
		@Param('id') id: number,
		@RequestUser() user: RequestAccount
	): Promise<Account[]> {
		if (user.role == 'customer') id = user.id
		const account = await this.AccountService.findAccount(id)
		if (!account?.length) {
			throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
		}
		return account
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(Role.Admin)
	@Post()
	async create(@Body() dto: CreateAccountDto) {
		const account = await this.AccountService.createCustomer(dto)
		if (!account) {
			throw new HttpException(
				'Customer not created',
				HttpStatus.INTERNAL_SERVER_ERROR
			)
		}
		return account
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(Role.Admin, Role.Customer)
	@Put()
	async update(
		@Body() @Param('id') id: number,
		@RequestUser() user: RequestAccount,
		dto: UpdateAccountDto
	) {
		if (user.role == 'customer') id = user.id
		const account = await this.AccountService.updateAccount(id, dto)
		if (!account) {
			throw new HttpException(
				'Customer not created',
				HttpStatus.INTERNAL_SERVER_ERROR
			)
		}
		return account
	}

	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(Role.Admin)
	@Delete(':id')
	async delete(@Param('id') id: number) {
		const account = await this.AccountService.deleteAccount(id)
		if (!account) {
			throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
		}
		return account
	}
}
