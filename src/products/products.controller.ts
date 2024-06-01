import { Controller, Body, Post, Get, Put, Param, Query } from '@nestjs/common';
import { ProductEntity as ProductEntity } from 'src/entities/product.entity';
import { DeepPartial } from 'typeorm';
import { ProductsService } from './products.service';
import { IProductEntity } from "../../DataBases/interfaces.db";


@Controller('products')
export class ProductsController {
    constructor(private service: ProductsService) {}
<<<<<<< HEAD
    @Post()
    async createProduct(@Body() product: DeepPartial<ProductEntity>): Promise<IProductEntity>{
        return await this.service.createProduct(product);
    }

    @Get()
    async findProducts(): Promise<ProductEntity[]>{
        return await this.service.findProducts();
    }

=======
    @Get(':id')
    async findProductById(@Param('id') id: number): Promise<IProductEntity>{
        return await this.service.findProductById(id);
    }
    @Put(':id')
    async updateProductById(@Param('id') id: number, @Body() bodyUpdateProduct: Partial<ProductEntity>): Promise<IProductEntity>{
        return await this.service.updateProductById(id, bodyUpdateProduct);
    }

    
>>>>>>> 3e0686d8216f9ca32c5113f32cd06d061077b6b0
}
