import { IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator"
import { Product } from "../../product/entities/product.entity"

export class CreateStoreDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    name: string

    products: Product[]

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    address: string
}
