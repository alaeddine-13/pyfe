import { Module } from '@nestjs/common';
import { ProjetService } from './projet.service';
import { ProjetController } from './projet.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ProjetEntity} from "./entities/projet.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProjetEntity])],
  controllers: [ProjetController],
  providers: [ProjetService]
})
export class ProjetModule {}
