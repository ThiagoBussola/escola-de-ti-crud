import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudCupomDto } from './create-crud-cupom.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength,  } from "class-validator";

export class UpdateCrudCupomDto extends PartialType(CreateCrudCupomDto) {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
      nome: string;
    
    @IsString()
    @MinLength(3)
    @MaxLength(50)
      descricao: string;
    
      @MinLength(3)
      @MaxLength(50)
      modalidade: number;
    
    @MinLength(3)
    @MaxLength(50)
      sobre: string;
    
    @MinLength(3)
    @MaxLength(10)
      categoria: string; 
      
   // @IsDate()
      dias: string;
}
