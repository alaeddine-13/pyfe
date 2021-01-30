import {ProjetEntity} from './../../projet/entities/projet.entity';
import {SessionEntity} from './../../session/entities/session.entity';

export class CreateSoutenanceDto {
    id: number;
    rapport: string;
    salle: string;
    date: Date;
    session: SessionEntity;
    projet: ProjetEntity;
}
