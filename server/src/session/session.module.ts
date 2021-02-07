import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { SessionEntity} from "./entities/session.entity";
import {PdfService} from "../pdf/pdf.service";

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity]), PdfService],
  controllers: [SessionController],
  providers: [SessionService, PdfService]
})
export class SessionModule {}
