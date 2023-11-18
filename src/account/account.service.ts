import { AccountRepository } from './acoount.repository';
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { genSaltSync, hashSync } from 'bcryptjs'

@Injectable()
export class AccountService {
    constructor(private readonly AccountRepository: AccountRepository) { }

    async findAccount(id: string) {
        try {
            const account = await this.AccountRepository.findById(id);
            console.log({ account });
            return account
        } catch (error) {
            console.log(error)
        }
    }

    async findAllAccounts() {
        try {
            const accounts = await this.AccountRepository.findAll();
            console.log({ accounts });
            return accounts
        } catch (error) {
            console.log(error)
        }
    }

    async createAccount(accountDto: CreateAccountDto) {
        try {
            const salt = genSaltSync(10)
            accountDto.password = hashSync(accountDto.password, salt)
            const account = await this.AccountRepository.create(accountDto);
            return account
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAccount(id: string) {
        try {
            const account = await this.AccountRepository.delete(id);
            return account
        } catch (error) {
            console.log(error)
        }
    }

}
