import {SoutenanceEntity} from './entities/soutenance.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateSoutenanceDto} from './dto/create-soutenance.dto';
import {UpdateSoutenanceDto} from './dto/update-soutenance.dto';

@Injectable()
export class SoutenanceService {
    constructor(
        @InjectRepository(SoutenanceEntity)
        private soutenanceRepository: Repository<SoutenanceEntity>,
    ) {
    }

    async create(createSoutenanceDto: CreateSoutenanceDto) {
        const annee = this.soutenanceRepository.create(createSoutenanceDto);
        await this.soutenanceRepository.save(createSoutenanceDto);
        return annee;
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
