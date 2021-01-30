import {UserEntity} from '../../auth/entities/user.entity';

import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {SoutenanceEntity} from '../../soutenance/entities/soutenance.entity';

export enum StatutProjetEnum {
    VALIDE = 'valide',
    ENCOURS = 'en cours',
    ANNULE = 'annule',
}

@Entity('projet')
export class ProjetEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sujet: string;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    etudiant: UserEntity;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    encadrant: UserEntity;

    @Column()
    societe: string;

    @Column({
        type: 'enum',
        enum: StatutProjetEnum,
        default: StatutProjetEnum.ENCOURS
    })
    statut: string;

    @OneToMany(() => SoutenanceEntity, soutenance => soutenance.projet)
    soutenances: SoutenanceEntity[];
}
