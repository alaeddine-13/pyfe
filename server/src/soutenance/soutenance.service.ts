import {SoutenanceEntity} from './entities/soutenance.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateSoutenanceDto} from './dto/create-soutenance.dto';
import {UpdateSoutenanceDto} from './dto/update-soutenance.dto';
import { ProjetEntity } from 'src/projet/entities/projet.entity';

@Injectable()
export class SoutenanceService {
    constructor(
        @InjectRepository(SoutenanceEntity)
        private soutenanceRepository: Repository<SoutenanceEntity>,
        @InjectRepository(ProjetEntity)
        private projetRepository: Repository<ProjetEntity>,
    ) {
    }

    async create(createSoutenanceDto: CreateSoutenanceDto) {
        let soutenance = this.soutenanceRepository.create(createSoutenanceDto);
        soutenance = await this.soutenanceRepository.save(soutenance);
        await this.projetRepository.update(
            {id: +createSoutenanceDto.projet},
            {soutenance: soutenance})
        return soutenance;
    }

    async findAll() {
        return this.soutenanceRepository.find();
    }

    async findById(id: number) {
        return await this.soutenanceRepository.findOne({id});
    }

    async update(id: number, updateSoutenanceDto: UpdateSoutenanceDto) {
        await this.soutenanceRepository.update({id}, updateSoutenanceDto);
        return await this.soutenanceRepository.findOne({id});
    }

    async remove(id: number) {
        await this.soutenanceRepository.delete({id});
        return {deleted: true};
    }
}
