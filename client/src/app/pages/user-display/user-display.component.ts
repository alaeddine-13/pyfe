import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.id = this.route.snapshot.params.id;
    this.user = new UserModel();
    this.getUser();
    this.projets = {};
    this.getProjetsByID()
  }

  getUser() {
    this.crudService.getAll(BASE_API + USER + '/' + this.id).subscribe(
      // @ts-ignore
      (data: UserModel) => {
        this.user = data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  getProjetsByID() {
    this.crudService.getAll(BASE_API + PROJET + '/byUser/' + this.id).subscribe(
      // @ts-ignore
      (data: ProjetModel[]) => {
        this.projets = data;
        console.log(this.projets);
      }, (error: any) => {
        console.log(error);
      }
    );
    // TODO: get projet from backend end-point /projet/byUser/id
    /*this.crudService.getAll(BASE_API + PROJET + '/byUser/' + this.id).subscribe(
      // @ts-ignore
      (data: UserModel) => {
        this.projets = data;
        console.log(this.projets);
      }, (error) => {
        console.log(error);
      }
    );*/
  }

}
