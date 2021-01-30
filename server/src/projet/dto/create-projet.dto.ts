import {UserEntity} from './../../auth/entities/user.entity';
import {SoutenanceEntity} from './../../soutenance/entities/soutenance.entity';

export class CreateProjetDto {
    id: number;
    sujet: string;
    etudiant: UserEntity;
    encadrant: UserEntity;
    societe: string;
    statut: string;
    soutenances: SoutenanceEntity[];
}
