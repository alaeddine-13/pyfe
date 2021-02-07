import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { SessionEntity} from "./entities/session.entity";
import {PdfService} from "../pdf/pdf.service";
import { FileUploadModule } from 'src/file-upload/file-upload.module';
import { PdfModule } from 'src/pdf/pdf.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SessionEntity]),
    PdfModule,
    FileUploadModule
  ],
  controllers: [SessionController],
  providers: [SessionService]
})
export class SessionModule {}
