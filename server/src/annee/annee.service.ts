import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnneeEntity } from './entities/annee.entity';
import { CreateAnneeDto } from './dto/create-annee.dto';
import { UpdateAnneeDto } from './dto/update-annee.dto';

@Injectable()
export class AnneeService {
  constructor(
      @InjectRepository(AnneeEntity)
      private anneeRepository: Repository<AnneeEntity>,
  ) {}

  async create(createAnneeDto: CreateAnneeDto) {
    const annee = this.anneeRepository.create(createAnneeDto);
    await this.anneeRepository.save(createAnneeDto);
    return annee;
  }

  async findAll() {
    return this.anneeRepository.find();
  }

  async findById(id: number) {
    return await this.anneeRepository.findOne({ id });
  }

  async update(id: number, updateAnneeDto: UpdateAnneeDto) {
    await this.anneeRepository.update({ id }, updateAnneeDto);
    return await this.anneeRepository.findOne({ id });
  }

  async remove(id: number) {
    await this.anneeRepository.delete({ id });
    return { deleted: true };
  }
}
