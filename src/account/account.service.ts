import { AccountRepository } from './acoount.repository';
import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';

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
    async createAccount(accountDto: CreateAccountDto) {
        const account = await this.AccountRepository.create(accountDto);
        return account
    }

}
