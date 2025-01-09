import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Data extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  phoneNumber: string;

  @Prop()
  address: string;

  @Prop()
  zipcode: string;

  @Prop()
  fatherName: string;

  @Prop()
  motherName: string;

  @Prop()
  rollNumber: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);


