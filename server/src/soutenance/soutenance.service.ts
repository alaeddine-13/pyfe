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
        console.log("dto", createSoutenanceDto)
        let soutenance = this.soutenanceRepository.create(createSoutenanceDto);
        console.log("entity", soutenance)
        
        soutenance = await this.soutenanceRepository.save(soutenance);
        await this.projetRepository.update(
            {id: +createSoutenanceDto.projet},
            {soutenance: soutenance})
        return soutenance;
    }

    async findAll() {
        const query = this.soutenanceRepository
            .createQueryBuilder('soutenance')
            .addSelect('projet.id', 'projetId')
            .leftJoin('projet', 'projet', 'projet.soutenanceId = soutenance.id');
        console.log(query.getSql());
        return query.getRawMany();
    }

    async findById(id: number) {
        const query = this.soutenanceRepository
            .createQueryBuilder('soutenance')
            .where('soutenance.id = :id', {id : id})
            .addSelect('projet.id', 'projetId')
            .leftJoin('projet', 'projet', 'projet.soutenanceId = soutenance.id');
        console.log(query.getSql());
        return query.getRawOne();
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
