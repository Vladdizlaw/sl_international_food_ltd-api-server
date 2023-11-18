import { IsNotEmpty, IsString, MinLength, IsInt, Contains, IsOptional } from "class-validator"
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
    @Contains('admin' || 'customer')
    role: 'admin' | 'customer'
    @IsInt()
    balance: number
    @IsString()
    @IsOptional()
    email?: string
} 