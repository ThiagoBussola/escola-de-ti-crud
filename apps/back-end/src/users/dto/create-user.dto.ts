import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    firstname: string
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    lastname: string
    @IsNotEmpty()
    @IsNumber()
    @MinLength(4)
    @MaxLength(50)
    password: string
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MinLength(4)
    @MaxLength(50)
    email: string
    @IsNotEmpty()
    @IsNumber()
    authorizesLevel: number
}
