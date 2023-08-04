import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePackageDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @MinLength(4)
  name: string;
  @IsNotEmpty()
  @IsNumber()
  duration: number;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
