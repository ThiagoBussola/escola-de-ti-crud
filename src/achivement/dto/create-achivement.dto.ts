import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateAchivementDto {
  @IsString()
  @IsNotEmpty()
  id_entregador: string;

  @IsNumber()
  @IsNotEmpty()
  total_entregas: number;
}
