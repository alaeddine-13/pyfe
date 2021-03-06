import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CorsMiddleware} from '@nest-middlewares/cors';

import * as dotenv from 'dotenv';
import {AuthModule} from './auth/auth.module';
import {AnneeModule} from './annee/annee.module';
import {SessionModule} from './session/session.module';
import {ProjetModule} from './projet/projet.module';
import {SoutenanceModule} from './soutenance/soutenance.module';
import { UserModule } from './user/user.module';
import { PdfService } from './pdf/pdf.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { PdfModule } from './pdf/pdf.module';

dotenv.config();


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
      database: process.env.DATABASE_NAME,
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      synchronize: true
    }),
    AuthModule,
    AnneeModule,
    SessionModule,
    ProjetModule,
    SoutenanceModule,
    UserModule,
    FileUploadModule,
    MulterModule,
    PdfModule
  ],
  controllers: [AppController],
  providers: [AppService, PdfService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    const corsOptions = {
      origin: '*'
    }
    CorsMiddleware.configure(corsOptions);
    consumer.apply(CorsMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
