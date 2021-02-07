import { Injectable } from '@nestjs/common';
import { s3 } from 'src/generics/vars';

@Injectable()
export class FileUploadService {
    async upload(file: { originalname: any; buffer: any; })  {
        const uploadResult = await s3.upload({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: file.originalname,
          Body: file.buffer,
          ACL: 'public-read'
        }).promise();
        return uploadResult.Location
    }
}
