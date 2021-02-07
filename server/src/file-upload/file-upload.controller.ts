import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import {FileInterceptor} from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import * as aws from 'aws-sdk';
import * as multer from 'multer';

dotenv.config();

const multerMemoryStorage = multer.memoryStorage();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'us-east-1'
 });

 const s3 = new aws.S3();


@Controller('files')
export class FileUploadController {
    constructor(
        private fileUploadService: FileUploadService
    ){}
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
      storage: multerMemoryStorage
    }))
    async upload(@UploadedFile() file)  {
        const uploadResult = await s3.upload({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: file.originalname,
          Body: file.buffer,
          ACL: 'public-read'
      }).promise();
        return {url: uploadResult.Location}
    }
}
