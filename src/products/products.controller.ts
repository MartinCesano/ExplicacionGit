import { Controller, Body, Post, Get, Put, Param, Query } from '@nestjs/common';
import { ProductEntity as ProductEntity } from 'src/entities/product.entity';
import { DeepPartial } from 'typeorm';
import { ProductsService } from './products.service';
import { IProductEntity } from "../../DataBases/interfaces.db";


@Controller('products')
export class ProductsController {
    constructor(private service: ProductsService) {}
    
}
