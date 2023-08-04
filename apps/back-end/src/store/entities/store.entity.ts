import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Product } from "../../product/entities/product.entity";
import mongoose from "mongoose";

@Schema()
export class Store {
    @Prop()
    name: string
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[]
    @Prop()
    address: string
}

export const StoreSchema = SchemaFactory.createForClass(Store)
