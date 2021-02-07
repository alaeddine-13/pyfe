import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {BASE_API, ANNEE} from "../../globals/vars";
import {AnneeModel} from "../../models/annee.model";

@Component({
  selector: 'app-annee-datatable',
  templateUrl: './annee-datatable.component.html',
  styleUrls: ['./annee-datatable.component.css']
})
export class AnneeDatatableComponent implements OnInit {

  annees: AnneeModel[] = []
  columns: [string, string][] = [['annee', 'Annee']]
  linkColumns: [string, string, (id: any) => string][] = [
    ['id', 'Modifier', (id)=>`/annee/${id}`]
  ]

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.getAnnees()
  }

  async getAnnees(){
    this.annees = []
    this.annees = <AnneeModel[]> await this.crudService.getAll(BASE_API + ANNEE).toPromise()
  }

}
