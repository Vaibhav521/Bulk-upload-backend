import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as csv from 'csv-parser';
import { createReadStream } from 'fs';
import { Data } from '../schemas/data.schema';
import { UploadHistory } from '../schemas/uploadHistroy.schema';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UploadService {

  // injected data models too acces documets with this.
  constructor(
    @InjectModel('Data') private dataModel: Model<Data>,
    @InjectModel('UploadHistory') private uploadHistoryModel: Model<UploadHistory>
  ) {}


  /**
   * File parameter 
   *  setp 1 : this will loop over each csv row and store data in results 
   *  setp 2 : after setp 1  this will do insertMany in you data model
   *  setp 3 : after setp 1 & 3 we create a history log  for file in uploadHistoryModel
   *  Note : this insert many thing will work only if our csv header and schema filed matches   
   */
  async uploadCSV(file: Express.Multer.File) {
    const results = [];
    try {
      await new Promise((resolve, reject) => {
        createReadStream(file.path)
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', async () => {
            try {
              const inserted = await this.dataModel.insertMany(results);
              const uploadHistory = new this.uploadHistoryModel({
                totalDocuments: results.length,
                isSuccessful: true,
              });
              await uploadHistory.save();
              resolve(inserted);
            } catch (insertError) {
              reject(insertError);
            }
          })
          .on('error', (err) => reject(err));
      });

      return { message: 'Upload successful', count: results.length };
    } catch (error) {

      const uploadHistory = new this.uploadHistoryModel({
        totalDocuments: 0,
        isSuccessful: false,
      });

      await uploadHistory.save();

      throw new Error(`Error uploading CSV: ${error.message}`);
    }
  }



  // simple get service that usees moongoose skip and limit method to use pagination 
  async getData(page = 1, limit = 10) {
    try {
      const skip = (page - 1) * limit;
      const total = await this.dataModel.countDocuments();
      const data = await this.dataModel.find().skip(skip).limit(limit);

      return { total, data };
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }

  // find by id method 
  async getById(id: string) {
    try {
      const data = await this.dataModel.findById(id);

      if (!data) {
        throw new NotFoundException(`Data with ID ${id} not found`);
      }

      return data;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`Data with ID ${id} not found`);
    }
  }


  // get all doucments ( can apply pagination in future )
  async getUploadHistory() {
    try {
      const data = await this.uploadHistoryModel.find().sort({ createdAt: -1 });
  
      if (data.length === 0) {
        return { message: 'No upload history found' };
      }
  
      return data;
    } catch (error) {
      throw new Error('Error fetching upload history');
    }
  }
  
}
