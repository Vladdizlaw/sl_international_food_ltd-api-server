import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }
    @Post()
    async login(@Body() dto: AuthDto) { 
        
    }
}
