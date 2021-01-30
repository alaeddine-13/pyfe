import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserEntity } from './entities/user.entity';
import { UserSignupDto } from './dto/user-signup.dto';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post('signup')
  register(
    @Body() userSignupData: UserSignupDto
  ): Promise<Partial<UserEntity>> {
    return this.authService.register(userSignupData);
  }

  @Post('users')
  bulkAdd(
    @Body() data: UserSignupDto[]
  ): Promise<Partial<UserEntity>[]> {
    console.log(data)
    return this.authService.bulkAdd(data);
  }

  @Post('signin')
  login(
    @Body() credentials: UserSignupDto
  ): Promise<any> {
    return this.authService.login(credentials);
  }
}
