import { ApiProperty } from '@nestjs/swagger'
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
export class CreateProductDto {
	@ApiProperty()
	@IsNotEmpty()
	@MinLength(4, {
		message: 'name must be at least 4 characters'
	})
	@IsString()
	name: string

	@ApiProperty()
	@IsNotEmpty()
	@MinLength(4, {
		message: 'name must be at least 4 characters'
	})
	@IsString()
	country: string

	@ApiProperty()
	@IsInt()
	category_id: number

	@ApiProperty()
	@IsString()
	alc_vol: string

	@ApiProperty()
	@IsNumber()
	unit_size: number

	@ApiProperty()
	@IsString()
	quantity_pack: string

	@ApiProperty()
	@IsString()
	unit_mesaure: string

	@ApiProperty()
	@IsInt()
	shelf_life: number

	@ApiProperty()
	@IsInt()
	stock: number

	@ApiProperty()
	@IsNumber()
	price: number

	@ApiProperty()
	@IsNumber()
	rrp: number

	@ApiProperty()
	@IsInt()
	discount: number
}
