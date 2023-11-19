import { AccountService } from './account.service';
import { Controller, Post, Body, Put, Param, Get, HttpException, HttpStatus, Delete, UseGuards } from '@nestjs/common'
import { CreateAccountDto } from './dto/create-account.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
@Controller('account')
export class AccountController {
    constructor(private readonly AccountService: AccountService) { }
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() {
        const accounts = await this.AccountService.findAllAccounts()
        if (!accounts) {
            throw new HttpException('Accounts not found', HttpStatus.NOT_FOUND)
        }
        return accounts
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async get(@Param('id') id: string) {
        const account = await this.AccountService.findAccount(id)
        if (!account?.length) {
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
        }
        return account
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() dto: CreateAccountDto) {
        const account = await this.AccountService.createAccount(dto)
        if (!account) {
            throw new HttpException('Account not created', HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return account
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const account = await this.AccountService.deleteAccount(id)
        if (!account) {
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
        }
        return account
    }
}
