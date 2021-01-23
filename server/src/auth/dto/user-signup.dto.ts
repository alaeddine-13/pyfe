import { UserSigninDto } from "./user-signin.dto";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UserSignupDto  extends UserSigninDto{
    @IsEmail()
    @IsNotEmpty()
    email;
  }
