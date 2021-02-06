import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../models/user.model';

@Pipe({
  name: 'showUser'
})
export class UserPipe implements PipeTransform {

  transform(user: UserModel): string {
    if (user.nom && user.prenom)
        return user.nom + " " + user.prenom
    else if (user.nom)
        return user.nom
    else if (user.prenom)
        return user.prenom
    else return ""
  }

}