import { AccountRepository } from './../account/account.repository';
import { AuthRepository } from './auth.repository';
import { compare } from 'bcryptjs'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly AuthRepository: AuthRepository, private readonly AccountRepository: AccountRepository, private readonly JwtService: JwtService) { }
    async signIn(authDto: AuthDto) {
        const [account] = await this.AccountRepository.findByLogin(authDto.login);
        if (!account) {
            throw new UnauthorizedException('Account not found')
        }
        const isPasswordCorrect = await compare(authDto.password, account.password)
        if (!isPasswordCorrect) {
            throw new UnauthorizedException('Wrong password')
        }
        const { login, password, role, id } = account
        const accessToken = await this.JwtService.signAsync({ login, password, role, id })
        return { acess_token: accessToken }

    }
}
