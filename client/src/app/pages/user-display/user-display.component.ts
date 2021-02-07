import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {BASE_API, USER, PROJET} from "../../globals/vars";
import {CrudService} from '../../services/crud.service';
import { UserModel, UserRoleEnum } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  id: number;
  user: UserModel;
  projets: any;
  etudiantRole: string = UserRoleEnum.ETUDIANT
  enseignantRole: string = UserRoleEnum.PROFESSEUR
  adminRole: string = UserRoleEnum.ADMIN

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      const id = params.get('id')
      if(id)
        this.id = +id;
      this.load()
    }); 
    
    this.crudService.behaviorSubject.subscribe(update=>update === true ? this.load() : '');
  }
  load(){
    this.user = new UserModel();
    this.getUser();
    this.getProjetsByID()
  }

  async getUser() {
    this.user = <UserModel> await this.crudService.getAll(BASE_API + USER + '/' + this.id).toPromise().catch(
      error => {
        console.log(error);
      }
    )
  }

  async getProjetsByID() {
    this.projets = await this.crudService.getAll(BASE_API + PROJET + '/byUser/' + this.id).toPromise()
      .catch(error =>{
        console.log(error);
      })
  }

}
