import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConvidadoDocument = HydratedDocument<Convidado>;

@Schema()
export class Convidado {
  @Prop()
  evento: string;

  @Prop()
  usuario: string;

  //@Prop()
  //status: enum;

  @Prop()
  convite: string;
}

export const ConvidadoSchema = SchemaFactory.createForClass(Convidado);
