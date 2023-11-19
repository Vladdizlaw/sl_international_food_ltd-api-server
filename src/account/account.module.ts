import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { KnexModule } from 'nest-knexjs'
import { AccountRepository } from './account.repository';
@Module({
  providers: [AccountService, AccountRepository],
  imports: [KnexModule],
  controllers: [AccountController]
})
export class AccountModule { }
