import { AccountRepository } from './account.repository';
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { genSaltSync, hashSync } from 'bcryptjs'
import { UpdateAccountDto } from './dto/update-account.dto';
import { accountStatuses } from './constants/account-statuses.constant'
@Injectable()
export class AccountService {
    constructor(private readonly AccountRepository: AccountRepository) { }

    async findAccount(id: number) {
        try {
            const account = await this.AccountRepository.findById(id);
            return account
        } catch (error) {
            console.log(error)
            throw new Error(error)
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

    async createCustomer(dto: CreateAccountDto) {
        try {
            const salt = genSaltSync(10)
            const password = hashSync(dto.password, salt)
            const accountDto = { ...dto, password, role: 'customer', status_id: accountStatuses.active }
            const account = await this.AccountRepository.create(accountDto);
            return account
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
    async updateAccount(id: number, dto: UpdateAccountDto) {
        try {
            const account = await this.AccountRepository.update(id, dto);
            return account
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAccount(id: number) {
        try {
            const account = await this.AccountRepository.delete(id);
            return account
        } catch (error) {
            console.log(error)
        }
    }

}
