import * as aws from 'aws-sdk';
import * as dotenv from 'dotenv';
import * as multer from 'multer';

dotenv.config();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'us-east-1'
 });

 export const s3 = new aws.S3();

export const multerMemoryStorage = multer.memoryStorage();

