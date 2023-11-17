import { AccountService } from './account.service';
import { Controller, Post, Body, Put, Param, Get, HttpException, HttpStatus } from '@nestjs/common'
import { CreateAccountDto } from './dto/create-account.dto';
@Controller('account')
export class AccountController {
    constructor(private readonly AccountService: AccountService) { }
    @Get(':id')
    async get(@Param('id') id: string) {
        const account = await this.AccountService.findAccount(id)

        if (!account.length) {
            throw new HttpException('Account not found', HttpStatus.NOT_FOUND)
        }
        return account
    }
    @Post()
    async create(@Body() dto: CreateAccountDto) {
        const account = await this.AccountService.createAccount(dto)
        return account
    }
}
