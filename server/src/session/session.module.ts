import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { SessionEntity} from "./entities/session.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  controllers: [SessionController],
  providers: [SessionService]
})
export class SessionModule {}
