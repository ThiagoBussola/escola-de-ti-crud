import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventoDocument = HydratedDocument<Evento>;

@Schema()
export class Evento {
  @Prop()
  ativo: boolean;

  @Prop()
  publico: boolean;

  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  local: string;

  @Prop({ required: true })
  data_inicio: string;

  @Prop({ required: true })
  data_fim: string;
}

export const EventoSchema = SchemaFactory.createForClass(Evento);
