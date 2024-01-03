import {
	IsNotEmpty,
	IsString,
	MinLength,
	IsInt,
	Contains,
	IsOptional,
	ValidateIf,
	IsNumber
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
export class UpdateAccountDto {
	@ApiProperty()
	@MinLength(4, {
		message: 'name must be at least 4 characters'
	})
	@IsString()
	@ApiProperty()
	@IsOptional()
	name?: string
	@ApiProperty()
	@MinLength(4, {
		message: 'company must be at least 4 characters'
	})
	@IsString()
	@ApiProperty()
	@IsOptional()
	company?: string
	@ApiProperty()
	@MinLength(4, {
		message: 'email must be at least 4 characters'
	})
	@IsString()
	@ApiProperty()
	@IsOptional()
	email?: string
	@ApiProperty()
	@MinLength(4, {
		message: 'company_vat must be at least 4 characters'
	})
	@IsString()
	@ApiProperty()
	@IsOptional()
	company_vat?: string
	@ApiProperty()
	@MinLength(4, {
		message: 'vat must be at least 4 characters'
	})
	@IsString()
	@ApiProperty()
	@IsOptional()
	vat?: string
	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	@MinLength(4, {
		message: 'billing_address must be at least 4 characters'
	})
	@IsOptional()
	billing_address?: string
	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	@MinLength(4, {
		message: 'delivery_address must be at least 4 characters'
	})
	@IsOptional()
	delivery_address?: string
	@ApiProperty()
	@IsNotEmpty()
	@IsOptional()
	@IsNumber()
	status_id?: string
	@ApiProperty()
	@IsNotEmpty()
	@IsOptional()
	@IsString()
	note?: string
}
