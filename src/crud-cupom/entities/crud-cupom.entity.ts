import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CupomDocument = HydratedDocument<Cupom>;

@Schema()
export class Cupom { 

@Prop({required: true})
    nome: string; 

@Prop()
    descricao: string;

@Prop()
    modalidade: number;

@Prop()
    sobre: string; 

@Prop()
    categoria: string;

@Prop()
    dias: string; 

}
export const CupomSchema = SchemaFactory.createForClass(Cupom);

