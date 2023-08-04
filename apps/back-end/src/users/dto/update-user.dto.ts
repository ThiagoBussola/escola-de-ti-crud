import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber, IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
