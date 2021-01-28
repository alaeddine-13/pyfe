import { Injectable } from '@nestjs/common';
import { CreateSoutenanceDto } from './dto/create-soutenance.dto';
import { UpdateSoutenanceDto } from './dto/update-soutenance.dto';

@Injectable()
export class SoutenanceService {
  create(createSoutenanceDto: CreateSoutenanceDto) {
    return 'This action adds a new soutenance';
  }

  findAll() {
    return `This action returns all soutenance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soutenance`;
  }

  update(id: number, updateSoutenanceDto: UpdateSoutenanceDto) {
    return `This action updates a #${id} soutenance`;
  }

  remove(id: number) {
    return `This action removes a #${id} soutenance`;
  }
}
