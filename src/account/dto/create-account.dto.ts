import { IsNotEmpty, IsString, MinLength, IsInt, Contains, IsOptional, ValidateIf } from "class-validator"
export class CreateAccountDto {
    @IsNotEmpty()
    @MinLength(4, { message: 'Login must be at least 4 characters' })
    @IsString()
    login: string
    @IsNotEmpty()
    @IsString()
    @MinLength(4, { message: 'Password must be at least 4 characters' })
    password: string
    @IsNotEmpty()
    @ValidateIf(value => ['admin', 'customer'].includes(value))
    role: 'admin' | 'customer'
    @IsInt()
    balance: number
    @IsString()
    @IsOptional()
    email?: string
} 