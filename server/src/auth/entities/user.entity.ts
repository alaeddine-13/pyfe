import { Timestamp } from '../../generics/timestamp';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export enum UserRoleEnum {
  ADMIN = 'admin',
  ETUDIANT = 'etudiant',
  PROFESSEUR = 'professeur',
}

export enum FiliereEnum {
  GL = 'Genie Logiciel',
  IIA = 'Informatique Industriel Et Automatique',
  IMI = 'Instrumentation Et Maintenance Industrielle',
  RT = 'Resaux Et Telecommunications',
  NULL = ''
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
    default: UserRoleEnum.ETUDIANT
  })
  role: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  telephone: string;

  @Column({
    type: 'enum',
    enum: FiliereEnum,
    default: FiliereEnum.NULL
  })
  filiere: string;

  @Column('datetime')
  datenaissance: Date;
}

