import { PartialType } from '@nestjs/mapped-types';
import { CreateAchivementDto } from './create-achivement.dto';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateAchivementDto extends PartialType(CreateAchivementDto) {
  @IsString()
  @IsNotEmpty()
  id_entregador: string;

  @IsNumber()
  @IsNotEmpty()
  total_entregas: number;
}
