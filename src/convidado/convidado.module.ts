import { Module } from '@nestjs/common';
import { ConvidadoService } from './convidado.service';
import { ConvidadoController } from './convidado.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Convidado } from './entities/convidado.entity';
import { ConvidadoSchema } from './entities/schema/schema.convidado';

@Module({
  imports: [MongooseModule.forFeature([{ name: Convidado.name, schema: ConvidadoSchema }])],
  controllers: [ConvidadoController],
  providers: [ConvidadoService]
})
export class ConvidadoModule {}
