import { IsNotEmpty, IsString, MinLength, IsInt, Contains, IsOptional, ValidateIf } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
export class CreateAccountDto {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(4, { message: 'Name must be at least 4 characters' })
    @IsString()
    @ApiProperty()
    name: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(4, { message: 'Password must be at least 4 characters' })
    password: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(4, { message: 'Email must be at least 4 characters' })
    email: string
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(13, { message: 'Phone must be at least 13 characters' })
    phone: string
    // @ApiProperty()
    // @IsNotEmpty()
    // @ValidateIf(value => ['admin', 'customer'].includes(value))
    // role: 'admin' | 'customer'
   
} 