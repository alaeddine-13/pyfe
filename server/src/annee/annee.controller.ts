import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus } from '@nestjs/common';
import { AnneeService } from './annee.service';
import { CreateAnneeDto } from './dto/create-annee.dto';
import { UpdateAnneeDto } from './dto/update-annee.dto';

@Controller('annee')
export class AnneeController {
  constructor(private readonly anneeService: AnneeService) {}

  @Post()
  async create(@Body() createAnneeDto: CreateAnneeDto) {
    return await this.anneeService.create(createAnneeDto);
  }

  @Get()
  async findAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.anneeService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anneeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnneeDto: UpdateAnneeDto) {
    return this.anneeService.update(+id, updateAnneeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anneeService.remove(+id);
  }
}
