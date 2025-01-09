import { Controller, Post, Get, UseInterceptors, UploadedFile, Query , Param} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadService } from '../services/upload.service';


@Controller('upload')
export class UploadController {

  // we have injected our upload serive here to use with this.uploadService
  constructor(private uploadService: UploadService) {}


  /**
   * GET route .
   * This will fetch us history of uploaded files 
   * Saved in UploadHistory document
   */
  @Get('history')
  async getUploadHistory(){
    return this.uploadService.getUploadHistory() 
  }


  /**
   * POST route with formdata file .
   * setp 1 : this takes csv file form formdata file
   * setp 2 : stores it in /upload in our project dir with name 
   * setp 3 : we pass file to our controller which is given to our servie
   * uploaded data will get saved in Data document
   */
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.uploadCSV(file);
  }


    /**
   * GET route with page and limt query .
   * this will fetch uploaded data form Data document with pagination applied
   */
  @Get()
  async getData(@Query('page') page: number, @Query('limit') limit: number) {
    return this.uploadService.getData(page, limit);
  }

  /**
   * GET route with id parameter .
   * this will fetch student by given ID
   */
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.uploadService.getById(id);
  }


}