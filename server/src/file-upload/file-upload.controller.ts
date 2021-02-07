import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import {FileInterceptor} from '@nestjs/platform-express'
import * as dotenv from 'dotenv';
import * as multerS3 from 'multer-s3';
import * as aws from 'aws-sdk';

dotenv.config();

aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
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
        storage: multerS3({
          acl: 'public-read',
          s3,
          bucket: process.env.BUCKER_NAME,
          key: function(req: any, file: any, cb: any) {
            req.file = Date.now() + file.originalname;
            cb(null, Date.now() + file.originalname);
           }
        })
      }))
    upload(@UploadedFile() file)  {
        return {url: file.location}
    }
}
