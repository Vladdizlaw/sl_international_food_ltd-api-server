import { IsNotEmpty, IsString, MinLength, IsInt, Contains, IsOptional, ValidateIf } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
export class CreateAccountDto {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(4, { message: 'Login must be at least 4 characters' })
    @IsString()
    @ApiProperty()
    login: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(4, { message: 'Password must be at least 4 characters' })
    password: string
    @ApiProperty()
    @IsNotEmpty()
    @ValidateIf(value => ['admin', 'customer'].includes(value))
    role: 'admin' | 'customer'
    @ApiProperty()
    @IsInt()
    balance: number
    @ApiProperty()
    @IsString()
    @IsOptional()
    email?: string
} 