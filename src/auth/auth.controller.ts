import { AuthService } from './auth.service'
import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthDto } from './dto/auth.dto'

@Controller('signin')
export class AuthController {
	constructor(private AuthService: AuthService) {}
	@HttpCode(HttpStatus.OK)
	@Post()
	async signIn(@Body() dto: AuthDto) {
		const account = await this.AuthService.signIn(dto)
		return account
	}
}
