import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BASE_API, USER} from "../../globals/vars";
import {CrudService} from '../../services/crud.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  id: number;
  user: UserModel;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.user = new UserModel();
    this.getUser();
  }

  getUser() {
    this.crudService.getAll(BASE_API + USER + '/' + this.id).subscribe(
      // @ts-ignore
      (data: UserModel) => {
        this.user = data;
        console.log(this.user);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
