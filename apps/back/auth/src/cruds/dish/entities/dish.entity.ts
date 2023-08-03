import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type DishDocument  = HydratedDocument <Dish>;

@Schema()
export class Dish {
    @Prop({ required : true})
    name: string;

    @Prop({ required : true})
    price: number;

    @Prop({ required : true})
    description: string;

    @Prop({ required : true})
    dishType: string;
}

export const DishSchema = SchemaFactory.createForClass(Dish)
