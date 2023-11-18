import { AuthRepository } from './auth.repository';
import {} from 'bcryptjs'
import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly AuthRepository: AuthRepository) { }
    async signIn(authDto: AuthDto) {

    }
}
