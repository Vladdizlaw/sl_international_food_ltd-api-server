import { IsNotEmpty, IsString, MinLength, IsInt, Contains, IsOptional, ValidateIf } from "class-validator"
export class ProductDto {
    @IsNotEmpty()
    @IsInt()
    id: number

    @IsNotEmpty()
    @MinLength(4, { message: 'name must be at least 4 characters' })
    @IsString()
    item_name: string

    @IsNotEmpty()
    @MinLength(4, { message: 'name must be at least 4 characters' })
    @IsString()
    item_code: string

    @IsString()
    @MinLength(4, { message: 'Password must be at least 4 characters' })
    barcode: string
    
    @IsNotEmpty()
    @ValidateIf(value => ['admin', 'customer'].includes(value))
    role: 'admin' | 'customer'
    @IsInt()
    balance: number
    @IsString()
    @IsOptional()
    email?: string
} 
