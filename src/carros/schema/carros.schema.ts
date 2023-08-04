import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarroDocument = HydratedDocument<Carro>;

@Schema()
export class Carro {
    @Prop({required: true})
    marca: string;

    @Prop({required: true})
    modelo: string;

    @Prop({required: true})
    versao: string;

    @Prop({required: true})
    ano: number;

    @Prop({required: true})
    valor: number;

    @Prop()
    descricao: string;
}

export const CarroSchema = SchemaFactory.createForClass(Carro)