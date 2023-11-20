
import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { KnexModule } from 'nest-knexjs'
import { AccountRepository } from './account.repository';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
@Module({
  providers: [AccountService, AccountRepository],
  imports: [KnexModule],
  controllers: [AccountController]
})
export class AccountModule { }
