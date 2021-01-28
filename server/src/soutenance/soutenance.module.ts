import { Module } from '@nestjs/common';
import { SoutenanceService } from './soutenance.service';
import { SoutenanceController } from './soutenance.controller';

@Module({
  controllers: [SoutenanceController],
  providers: [SoutenanceService]
})
export class SoutenanceModule {}
