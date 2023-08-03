import { IsNotEmpty, IsNumber, IsString, isDate, isDateString } from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    title: String

    subtitle : String

    @IsNotEmpty()
    publishedAt : Date

    @IsNotEmpty()
    @IsString()
    author : String

    @IsNotEmpty()
    @IsNumber()
    volume : Number

    @IsNotEmpty()
    isbn : String

    @IsNotEmpty()
    @IsNumber()
    edition : Number
}
