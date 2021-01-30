import { InvalidDataException } from '../globals/exceptions';

export class UserModel {
  email: string | null | undefined; 
  username: string | null | undefined; 
  password: string | null | undefined; 
  role: string | null | undefined; 
  nom: string | null | undefined; 
  prenom: string | null | undefined; 
  telephone: string | null | undefined; 
  filiere: string | null | undefined; 
  datenaissance: string | null | undefined;

  constructor(  
    email?:string, 
    username?:string, 
    password?:string, 
    role?:string, 
    nom?:string, 
    prenom?:string, 
    telephone?:string, 
    filiere?:string, 
    datenaissance?:string
    ){
      this.email= email; 
      this.username= username; 
      this.password= password; 
      this.role= role; 
      this.nom= nom; 
      this.prenom= prenom; 
      this.telephone= telephone; 
      this.filiere= filiere; 
      this.datenaissance= datenaissance;
  }

  static from_json(json: Array<Array<string>>): UserModel[]{
    const equals = (a: Array<string>, b: Array<string>) => JSON.stringify(a) == JSON.stringify(b);
    let header = ["email", "username", "password", "role", "nom", "prenom", "telephone", "filiere", "datenaissance"]
    if(json.length < 2){
      throw new InvalidDataException("The file must contain at least 2 rows (including the header)")
    }
    if(!equals(header, json[0])){
      throw new InvalidDataException(`The file must contain header ${header}`)
    }
    let users = [];
    for(let i=1; i < json.length; i++){
      let user = new UserModel(...json[i].map((element)=> element.toString()));
      users.push(user);
    }
    return users
  }
}
