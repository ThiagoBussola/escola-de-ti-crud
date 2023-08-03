import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private ProductModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = this.ProductModel.create(createProductDto);
    return createdProduct;
  }

  findAll() {
    const findedProducts = this.ProductModel.find();
    return findedProducts;
  }

  findOne(id: string) {
    const findedProduct = this.ProductModel.findById(id);
    return findedProduct;
  }

  update(updateProductDto: UpdateProductDto) {
    const updatedProduct = this.ProductModel.findByIdAndUpdate
    return updatedProduct;
  }

  remove(id: string) {
    const deletedProduct = this.ProductModel.findByIdAndDelete(id);

    return deletedProduct;
  }
}
