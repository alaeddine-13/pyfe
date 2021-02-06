import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ProjetService} from './projet.service';
import {CreateProjetDto} from './dto/create-projet.dto';
import {UpdateProjetDto} from './dto/update-projet.dto';

@Controller('projet')
export class ProjetController {
    constructor(private readonly projetService: ProjetService) {
    }

    @Post()
    create(@Body() createProjetDto: CreateProjetDto) {
        return this.projetService.create(createProjetDto);
    }

    @Post('/valider/:id')
    valider(@Param('id') id: string) {
        return this.projetService.valider(+id);
    }

    @Post('/annuler/:id')
    annuler(@Param('id') id: string) {
        return this.projetService.annuler(+id);
    }

    @Get()
    findAll() {
        return this.projetService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.projetService.findById(+id);
    }

    @Get('/byUser/:id')
    findByUser(@Param('id') id: string){
        return this.projetService.findByUser(+id);
    }

    @Get('formatted/:id')
    findByIdFormatted(@Param('id') id: string) {
        return this.projetService.findByIdFormatted(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProjetDto: UpdateProjetDto) {
        return this.projetService.update(+id, updateProjetDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.projetService.remove(+id);
    }
}
