import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Controller, UseGuards, Get, Param, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';

@Controller('product')
export class ProductController {
    constructor(private readonly ProductService:ProductService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    async getAll() {
        const products = await this.ProductService.getProducts()
        return products
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    async createProduct(@Body() dto:CreateProductDto) {
        const product = await this.ProductService.createProduct(dto)
        if (!product) {
            throw new HttpException('Product not created', HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return product
    }

    @Get('category')
    @UseGuards(JwtAuthGuard, RolesGuard)
    async getCategories() {
        const categories = await this.ProductService.getProductCategories()
        return categories
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':id')
    async get(@Param('id') id: string) {
        const product = await this.ProductService.getProduct(id)
        return product
    }
}   
