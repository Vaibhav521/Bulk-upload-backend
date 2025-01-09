import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UploadHistory extends Document  {
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ type: Number, default: 0 })
  totalDocuments: number;

  @Prop({ type: Boolean, default: false })
  isSuccessful: boolean;
}


export const UploadHistorySchema = SchemaFactory.createForClass(UploadHistory);

