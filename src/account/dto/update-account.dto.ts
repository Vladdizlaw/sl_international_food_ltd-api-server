import { IsNotEmpty, IsString, MinLength, IsInt, Contains, IsOptional, ValidateIf } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
export class UpdateAccountDto {
    @ApiProperty()  
    @MinLength(4, { message: 'Login must be at least 4 characters' })
    @IsString()
    @ApiProperty()
    @IsOptional()
    login?: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(4, { message: 'Password must be at least 4 characters' })
    @IsOptional()
    password?: string
    @ApiProperty()
    @IsNotEmpty()
    @ValidateIf(value => ['admin', 'customer'].includes(value))
    @IsOptional()
    role?: 'admin' | 'customer'
    @ApiProperty()
    @IsInt()
    @IsOptional()
    balance?: number
    @ApiProperty()
    @IsString()
    @IsOptional()
    email?: string
} 