import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('annee')
export class AnneeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    annee: string;
}
