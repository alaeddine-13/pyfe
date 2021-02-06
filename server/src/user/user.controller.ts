import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get('enseignants')
    findAllEnseignants() {
        return this.userService.findAllEnseignants();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.userService.findById(+id);
    }
}

