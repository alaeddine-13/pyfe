import {ProjetEntity} from './entities/projet.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateProjetDto} from './dto/create-projet.dto';
import {UpdateProjetDto} from './dto/update-projet.dto';

@Injectable()
export class ProjetService {
    constructor(
        @InjectRepository(ProjetEntity)
        private projetRepository: Repository<ProjetEntity>,
    ) {
    }

    async create(createProjetDto: CreateProjetDto) {
        const annee = this.projetRepository.create(createProjetDto);
        await this.projetRepository.save(createProjetDto);
        return annee;
    }

    async findAll() {
        return this.projetRepository.find();
    }

    async findById(id: number) {
        return await this.projetRepository.findOne({id});
    }

    async findByUser(id: number) {
        return await this.projetRepository.find({id});
    }

    async update(id: number, updateProjetDto: UpdateProjetDto) {
        await this.projetRepository.update({id}, updateProjetDto);
        return await this.projetRepository.findOne({id});
    }

    async remove(id: number) {
        await this.projetRepository.delete({id});
        return {deleted: true};
    }

    async findByIdFormatted(id: number) {
        return this.projetRepository
            .createQueryBuilder('projet')
            .where("projet.id = :id", { id: id })
            .addSelect('projet.sujet', 'sujet')
            .addSelect('projet.societe', 'entreprise')
            .addSelect('projet.statut', 'statut')
            .addSelect('etudiant.nom', 'nom_etudiant')
            .addSelect('etudiant.prenom', 'prenom_etudiant')
            .addSelect('encadrant.nom', 'nom_encadrant')
            .addSelect('encadrant.prenom', 'prenom_encadrant')
            .addSelect('soutenance.salle', 'salle')
            .addSelect('soutenance.date', 'date')
            .addSelect('soutenance.rapport', 'rapport')
            .innerJoin('projet.encadrant', 'encadrant')
            .innerJoin('projet.etudiant', 'etudiant')
            .innerJoin('projet.soutenance', 'soutenance')
            .getRawMany();
    }
}
