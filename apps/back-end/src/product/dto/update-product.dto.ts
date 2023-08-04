import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber, Min } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    name: string
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    description: string
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    quantity: number
}
