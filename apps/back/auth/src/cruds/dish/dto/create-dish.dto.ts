import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class CreateDishDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @MinLength(5)
    name : string

    @IsNotEmpty()
    @IsNumber()
    price : number

    @IsNotEmpty()
    @IsString()
    @MaxLength(500)
    @MinLength(5)
    description : string

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(5)
    dishType : string

}
