import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from 'src/auth/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [UserService]
})
export class UserModule {}
