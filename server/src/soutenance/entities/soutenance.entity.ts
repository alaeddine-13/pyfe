import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../auth/entities/user.entity";
import {ProjetEntity} from "../../projet/entities/projet.entity";
import {SessionEntity} from "../../session/entities/session.entity";

@Entity('soutenance')
export class SoutenanceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rapport: string;

    @Column()
    salle: string;

    // TODO: Add Jury to soutenance when we agree about Enseignant entity
    // @ManyToMany(()=>UserEntity, jury)
    // @JoinColumn()
    // jury: UserEntity[];

    @Column('datetime')
    date: Date;

    @ManyToOne(() => SessionEntity)
    session: SessionEntity;


    @ManyToOne(() => ProjetEntity, projet => projet.soutenances)
    projet: ProjetEntity;
}