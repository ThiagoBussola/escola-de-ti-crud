import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
    @Prop({required: true})
    title: String

    @Prop()
    subtitle : String

    @Prop({required: true})
    publishedAt : Date

    @Prop({required: true})
    author : String

    @Prop({required: true})
    volume : Number

    @Prop({required: true})
    isbn : String

    @Prop({required: true})
    edition : Number
}
export const BookSchema = SchemaFactory.createForClass(Book);
