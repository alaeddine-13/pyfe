export class Session {
}

import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {AnneeEntity} from '../../annee/entities/annee.entity';

@Entity('session')
export class SessionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    president: string;

    @Column('datetime')
    debut: Date;


    @Column('datetime')
    fin: Date;

    @ManyToOne(type => AnneeEntity, annee => annee.id)
    annee: AnneeEntity;
}
