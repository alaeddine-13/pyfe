import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {BASE_API, USER} from "../../globals/vars";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-user-datatable',
  templateUrl: './user-datatable.component.html',
  styleUrls: ['./user-datatable.component.css']
})
export class UserDatatableComponent implements OnInit {

  users: UserModel[] = []
  columns: [string, string][] = [['nom', 'Nom'], ['prenom', 'Prenom'], ['role', 'Role'], ['email', 'E-mail']]
  linkColumns: [string, string, (id: any) => string][] = [
    //['id', 'Modifier', (id)=>`/user/${id}`]
  ]

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(){
    this.users = []
    this.users = <UserModel[]> await this.crudService.getAll(BASE_API + USER).toPromise()
  }

}
