import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {
    }

    filterUser(user: UserEntity){
        const copy = Object.assign({}, user)
        delete copy.password
        delete copy.salt
        delete copy.createdAt
        delete copy.updatedAt
        delete copy.deletedAt
        return copy
    }

    async findAll() {
        const users = this.userRepository.find();
        return (await users).map(this.filterUser)
    }

    async findById(id: number) {
        const user = this.userRepository.findOne({id});
        return this.filterUser(await user)
    }
}
