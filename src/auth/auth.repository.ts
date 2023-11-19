import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { AuthDto } from './dto/auth.dto';   

@Injectable()
export class AuthRepository {
    constructor(@InjectConnection() private readonly knex: Knex) { }

    async signIn(authDto:AuthDto) {
        
    }




}