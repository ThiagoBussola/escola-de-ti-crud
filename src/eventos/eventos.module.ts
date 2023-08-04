import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { Evento, EventoSchema } from './entities/evento.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Evento.name, schema: EventoSchema }]),
  ],
  controllers: [EventosController],
  providers: [EventosService],
})
export class EventosModule {}
