import {IsNotEmpty, IsString, MinLength, IsInt, Contains } from "class-validator"
export class CreateAccountDto {
    @IsNotEmpty()
    @MinLength(4,{message:'Login must be at least 4 characters'})
    @IsString()
    login: string
    @IsNotEmpty()
    @IsString()
	password: string
    @IsNotEmpty()
    @Contains('admin'||'customer')
	role: 'admin' | 'customer'
    @IsInt()
	balance: number
    @IsString()
	email?: string
}