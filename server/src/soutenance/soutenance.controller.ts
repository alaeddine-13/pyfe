import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {SoutenanceService} from './soutenance.service';
import {CreateSoutenanceDto} from './dto/create-soutenance.dto';
import {UpdateSoutenanceDto} from './dto/update-soutenance.dto';

@Controller('soutenance')
export class SoutenanceController {
    constructor(private readonly soutenanceService: SoutenanceService) {
    }

    @Post()
    create(@Body() createSoutenanceDto: CreateSoutenanceDto) {
        return this.soutenanceService.create(createSoutenanceDto);
    }

    @Get()
    findAll() {
        return this.soutenanceService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.soutenanceService.findById(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSoutenanceDto: UpdateSoutenanceDto) {
        return this.soutenanceService.update(+id, updateSoutenanceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.soutenanceService.remove(+id);
    }
}
