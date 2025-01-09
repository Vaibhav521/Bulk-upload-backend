import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataSchema } from './schemas/data.schema';
import { UploadHistorySchema } from './schemas/uploadHistroy.schema';
import { UploadController } from './controllers/upload.controller';
import { UploadService } from './services/upload.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Data', schema: DataSchema },
      { name: 'UploadHistory', schema: UploadHistorySchema }, 
    ]),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
