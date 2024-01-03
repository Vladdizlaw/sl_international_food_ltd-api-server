import { CreateProductDto } from './dto/create-product.dto'
import { Product } from './interfaces/product.interface'
import { ProductRepository } from './product.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductService {
	constructor(private readonly ProductRepository: ProductRepository) {}
	async getProductCategories() {
		const productCategories =
			await this.ProductRepository.getProductCategories()
		return productCategories
	}
	async getProduct(id: string): Promise<Product> {
		const [product] = await this.ProductRepository.findById(id)
		return product
	}

	async getProducts(): Promise<Product[]> {
		const products = await this.ProductRepository.findAll()
		return products
	}

	async createProduct(dto: CreateProductDto): Promise<Product> {
		try {
			const [product] = await this.ProductRepository.create(dto)
			return product
		} catch (error) {
			throw new Error(error)
		}
	}
}
