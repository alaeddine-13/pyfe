import { Timestamp } from '../../generics/timestamp';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export enum UserRoleEnum {
  ADMIN = 'admin',
  STUDENT = 'student',
  PROFESSOR = 'professor',
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
    default: UserRoleEnum.STUDENT
  })
  role: string;
}

