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

  findOne(id: number) {
    return `This action returns a #${id} annee`;
  }

  update(id: number, updateAnneeDto: UpdateAnneeDto) {
    return `This action updates a #${id} annee`;
  }

  async remove(id: number) {
    await this.anneeRepository.delete({id});
    return { deleted: true };
  }
}
