import { AccountRepository } from './../account/account.repository';
import { compare } from 'bcryptjs'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly AccountRepository: AccountRepository, private readonly JwtService: JwtService) { }
    async signIn(authDto: AuthDto) {
        const [account] = await this.AccountRepository.findByEmail(authDto.email);
        if (!account) {
            throw new UnauthorizedException('Account not found')
        }
        const isPasswordCorrect = await compare(authDto.password, account.password)
        if (!isPasswordCorrect) {
            throw new UnauthorizedException('Bad password')
        }
        const { email, password, role, id } = account
        const accessToken = await this.JwtService.signAsync({ email, password, role, id })
        return { acess_token: accessToken }

    }
}
