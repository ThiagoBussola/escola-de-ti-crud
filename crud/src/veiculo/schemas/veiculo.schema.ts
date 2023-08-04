import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Veiculo {
    @Prop({ required: true })
    modelo: string;

    @Prop({ required: true })
    ano: number;

    @Prop({ required: true })
    marca: string;

    @Prop({ required: true })
    fipe: number;
}

export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);
