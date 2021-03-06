import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @Get('formatted/')
  findAllFormatted() {
      return this.sessionService.findAllFormatted();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.sessionService.findById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.update(+id, updateSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionService.remove(+id);
  }

  @Get('pdf/:id')
  generatePDF(@Param('id') id: string){
    return this.sessionService.generatePDF(parseInt(id));
  }
}
