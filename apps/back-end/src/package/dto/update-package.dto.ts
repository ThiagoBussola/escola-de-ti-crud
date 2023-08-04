import { PartialType } from '@nestjs/mapped-types';
import { CreatePackageDto } from './create-package.dto';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsNumber,
} from 'class-validator';

export class UpdatePackageDto extends PartialType(CreatePackageDto) {
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
