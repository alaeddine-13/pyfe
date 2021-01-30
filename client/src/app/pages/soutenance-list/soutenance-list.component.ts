import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {BASE_API, SOUTENANCE} from '../../globals/vars';
import {SoutenanceModel} from '../../models/soutenance.model';

@Component({
  selector: 'app-soutenance-list',
  templateUrl: './soutenance-list.component.html',
  styleUrls: ['./soutenance-list.component.css']
})

export class SoutenanceListComponent implements OnInit {

  soutenances: SoutenanceModel[];

  constructor(private crudService: CrudService) {
  }

  ngOnInit() {
    this.soutenances = [];
    this.getSoutenances();
  }

  getSoutenances() {
    this.crudService.getAll(BASE_API + SOUTENANCE).subscribe(
      // @ts-ignore
      (data: any[]) => {
        this.soutenances = data;
        console.log(this.soutenances);
      }, (error) => {
        console.log(error);
      }
    );
  }


}
