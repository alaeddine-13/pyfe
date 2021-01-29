import { Module } from '@nestjs/common';
import { SoutenanceService } from './soutenance.service';
import { SoutenanceController } from './soutenance.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { SoutenanceEntity} from "./entities/soutenance.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SoutenanceEntity])],
  controllers: [SoutenanceController],
  providers: [SoutenanceService]
})
export class SoutenanceModule {}
