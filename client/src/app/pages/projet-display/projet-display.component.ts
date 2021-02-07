import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BASE_API, PROJET} from "../../globals/vars";
import {CrudService} from '../../services/crud.service';

@Component({
  selector: 'app-projet-display',
  templateUrl: './projet-display.component.html',
  styleUrls: ['./projet-display.component.css']
})
export class ProjetDisplayComponent implements OnInit {

  id:string;
  projet:any;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.projet = {};
    this.getProjet();
    this.crudService.behaviorSubject.subscribe(update=>update === true ? this.getProjet() : '');
  }

  getProjet() {
    this.crudService.getOne(BASE_API + PROJET + "/formatted", this.id).subscribe(
      // @ts-ignore
      (data: any[]) => {
        this.projet = data;
      }, (error) => {
        console.log(error);
      }
    );
  }

}
