import { IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator"

export class CreateProductDto {
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
