import { Timestamp } from '../../generics/timestamp';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export enum UserRoleEnum {
  ADMIN = 'admin',
  ETUDIANT = 'etudiant',
  PROFESSEUR = 'professeur',
}

@Entity('user')
export class UserEntity extends Timestamp {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    unique: true
  })
  username: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.PROFESSEUR
  })
  role: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  telephone: string;

  @Column()
  filiere: string;

  @Column('datetime')
  datenaissance: Date;
}

