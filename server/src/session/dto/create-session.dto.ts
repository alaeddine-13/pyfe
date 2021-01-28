import { AnneeEntity } from './../../annee/entities/annee.entity';
export class CreateSessionDto {
    id: number;
    nom: string;
    president: string;
    debut: Date;
    fin: Date;
    annee: AnneeEntity;
}
