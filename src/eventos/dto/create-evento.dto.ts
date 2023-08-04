import { IsNotEmpty } from 'class-validator';

export class CreateEventoDto {
  ativo: boolean;
  publico: boolean;

  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  local: string;

  @IsNotEmpty()
  data_inicio: string;

  @IsNotEmpty()
  data_fim: string;
}
