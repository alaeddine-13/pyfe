import { UserSigninDto } from "./user-signin.dto";
import { IsEmail, IsNotEmpty, IsEnum, IsPhoneNumber, IsDateString, IsDate, IsString } from "class-validator";
import { UserRoleEnum, FiliereEnum } from "../entities/user.entity";

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
