import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BASE_API, PROJET, USER} from "../../globals/vars";
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  id: number;
  user: any;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.user = {};
    this.getUser();
  }

  getUser() {
    this.crudService.getAll(BASE_API + PROJET + '/' + this.id).subscribe(
      // @ts-ignore
      (data: any[]) => {
        this.user = data;
        console.log(this.user);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
