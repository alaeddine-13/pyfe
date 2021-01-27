import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnneeService } from './annee.service';
import { AnneeController } from './annee.controller';
import { AnneeEntity } from './entities/annee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnneeEntity])],
  controllers: [AnneeController],
  providers: [AnneeService]
})
export class AnneeModule {}
