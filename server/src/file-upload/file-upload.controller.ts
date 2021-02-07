import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import {FileInterceptor} from '@nestjs/platform-express'
import * as multerS3 from 'multer-s3';
import {s3, multerMemoryStorage} from '../generics/vars'

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
          bucket: process.env.AWS_S3_BUCKET,
          key: function(req: any, file: any, cb: any) {
            req.file = Date.now() + file.originalname;
            cb(null, Date.now() + file.originalname);
           }
        })
      }))
    upload(@UploadedFile() file)  {
        return {url: file.location}
    }


    @Post('memory-upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: multerMemoryStorage
      }))
    async memoryUpload(@UploadedFile() file)  {
      const url = await this.fileUploadService.upload(file)
        return {url}
    }
}
