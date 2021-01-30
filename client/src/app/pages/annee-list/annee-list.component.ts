import {Component, OnInit} from '@angular/core';
import {AnneeModel} from '../../models/annee.model';
import {CrudService} from '../../services/crud.service';
import {ANNEE, BASE_API} from '../../globals/vars';

@Component({
  selector: 'app-annee-list',
  templateUrl: './annee-list.component.html',
  styleUrls: ['./annee-list.component.css']
})

export class AnneeListComponent implements OnInit {

  annees: AnneeModel[];

  constructor(private crudService: CrudService) {
  }

  ngOnInit() {
    this.annees = [];
    this.getAnnees();
  }

  getAnnees() {
    this.crudService.getAll(BASE_API + ANNEE).subscribe(
      // @ts-ignore
      (data: any[]) => {
        this.annees = data;
        console.log(this.annees);
      }, (error) => {
        console.log(error);
      }
    );
  }


}
