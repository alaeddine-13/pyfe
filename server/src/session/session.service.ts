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

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
