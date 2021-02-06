import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {SessionEntity} from "./entities/session.entity";
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import {AnneeEntity} from "../annee/entities/annee.entity";

@Injectable()
export class SessionService {
  constructor(
      @InjectRepository(SessionEntity)
      private sessionRepository: Repository<SessionEntity>,
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    const annee = this.sessionRepository.create(createSessionDto);
    await this.sessionRepository.save(createSessionDto);
    return annee;
  }

  async findAll() {
    return this.sessionRepository.find();
  }

  async findById(id: number) {
    return await this.sessionRepository.findOne({ id });
  }

  async update(id: number, updateSessionDto: UpdateSessionDto) {
    await this.sessionRepository.update({ id }, updateSessionDto);
    return await this.sessionRepository.findOne({ id });
  }

  async remove(id: number) {
    await this.sessionRepository.delete({ id });
    return { deleted: true };
  }

  async findAllFormatted(){

    const query = this.sessionRepository
    .createQueryBuilder('session')
    .addSelect('session.president', 'president')
    .addSelect('annee.annee', 'annee')
    .addSelect('session.nom', 'nom')
    .innerJoin('session.annee', 'annee')
    console.log(query.getSql())
    return await query.getRawMany()
  }
}
