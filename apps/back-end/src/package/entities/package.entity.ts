import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Package {
  @Prop()
  name: string;
  @Prop()
  duration: number;
  @Prop()
  quantity: number;
}

export const PackageSchema = SchemaFactory.createForClass(Package);
