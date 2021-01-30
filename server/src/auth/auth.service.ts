import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {UserEntity} from './entities/user.entity';

import * as bcrypt from 'bcrypt';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {JwtService} from '@nestjs/jwt';
import {UserSignupDto} from './dto/user-signup.dto';
import {UserSigninDto} from './dto/user-signin.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepositor: Repository<UserEntity>,
    private jwtService: JwtService
  ) {}

  async register(userSignupData: UserSignupDto): Promise<Partial<UserEntity>> {
    const user = this.userRepositor.create({
      ...userSignupData
    });
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);
    try{
      await this.userRepositor.save(user);
    } catch (e) {
        console.log(e);
      throw new ConflictException(`username and email must be unique`);
    }
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    };
  }

    async bulkAdd(data: UserSignupDto[]): Promise<Partial<UserEntity>[]> {
        const results = [];
        for (let i = 0; i < data.length; i++) {
            results.push(await this.register(data[i]));
        }
        return results;
    }

  async login(credentials: UserSigninDto) {
    const {username, password} = credentials;
    const user = await this.userRepositor.findOne({username});

      if(!user) {
        throw new NotFoundException('wrong credentials');
      } else {
        if ( await bcrypt.compare(password, user.password)) {
          const payload = {
            username: user.username,
            email: user.email,
            role: user.role
          }
          const jwt = this.jwtService.sign(payload);
          return  {
            "access_token" : jwt
          }
        } else {
          throw new NotFoundException('wrong credentials');
        }
      }
  }
}
