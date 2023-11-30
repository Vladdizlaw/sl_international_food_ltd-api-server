import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { KnexModule } from 'nest-knexjs'
import { getKnexConfig } from './configs/knex.config'
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), KnexModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: getKnexConfig
  }), AccountModule, AuthModule, OrderModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
