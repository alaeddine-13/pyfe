import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {ProjetEntity} from '../../projet/entities/projet.entity';
import {SessionEntity} from '../../session/entities/session.entity';

@Entity('soutenance')
export class SoutenanceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rapport: string;

    @Column()
    salle: string;

    @Column('datetime')
    date: Date;

    @ManyToOne(() => SessionEntity)
    session: SessionEntity;

    @ManyToOne(() => ProjetEntity, projet => projet.soutenances)
    projet: ProjetEntity;
}
