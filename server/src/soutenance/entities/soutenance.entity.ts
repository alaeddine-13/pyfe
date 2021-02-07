import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
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
    @JoinColumn()
    session: SessionEntity;

    @OneToOne(() => ProjetEntity, projet => projet.soutenance)
    @JoinColumn()
    projet: ProjetEntity;

    @Column()
    projetId: number;

    @Column()
    sessionId: number;
}
