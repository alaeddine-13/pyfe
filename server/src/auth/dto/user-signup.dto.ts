import {UserSigninDto} from './user-signin.dto';
import {IsDate, IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString} from 'class-validator';
import {FiliereEnum, UserRoleEnum} from '../entities/user.entity';

export class UserSignupDto  extends UserSigninDto{
    @IsEmail()
    @IsNotEmpty()
    email;

    @IsEnum(UserRoleEnum)
    role: string;

    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsNotEmpty()
    prenom: string;

    @IsPhoneNumber()
    telephone: string;

    @IsEnum(FiliereEnum)
    filiere: string;

    @IsDate()
    datenaissance: string;
  }
