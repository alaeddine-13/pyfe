import {Module} from '@nestjs/common';
import {SoutenanceService} from './soutenance.service';
import {SoutenanceController} from './soutenance.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SoutenanceEntity} from './entities/soutenance.entity';
import { ProjetEntity } from 'src/projet/entities/projet.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SoutenanceEntity, ProjetEntity])],
    controllers: [SoutenanceController],
    providers: [SoutenanceService]
})
export class SoutenanceModule {
}
