import { AccountService } from './account.service';
import { Controller, Post, Body, Put, Param, Get, HttpException, HttpStatus, Delete } from '@nestjs/common'
import { CreateAccountDto } from './dto/create-account.dto';
@Controller('account')
export class AccountController {
    constructor(private readonly AccountService: AccountService) { }

    @Get()
    async getAll() {
        const accounts = await this.AccountService.findAllAccounts()
        if (!accounts) {
            throw new HttpException('Accounts not found', HttpStatus.NOT_FOUND)
        }
        return accounts
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        const account = await this.AccountService.findAccount(id)
        if (!account?.length) {
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
        }
        return account
    }

    @Post()
    async create(@Body() dto: CreateAccountDto) {
        const account = await this.AccountService.createAccount(dto)
        if (!account) {
            throw new HttpException('Account not created', HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return account
    }

    
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const account = await this.AccountService.deleteAccount(id)
        if (!account) {
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
        }
        return account
    }
}
