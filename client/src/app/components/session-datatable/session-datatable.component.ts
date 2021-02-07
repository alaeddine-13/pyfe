import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {BASE_API, SESSION} from "../../globals/vars";
import {SessionModel} from "../../models/session.model";

@Component({
  selector: 'app-session-datatable',
  templateUrl: './session-datatable.component.html',
  styleUrls: ['./session-datatable.component.css']
})
export class SessionDatatableComponent implements OnInit {

  sessions: SessionModel[] = []
  columns: [string, string][] = [['nom', 'Session'], ['debut', 'Debut'], ['fin', 'Fin'], ['president', 'President']]
  linkColumns: [string, string, (id: any) => string][] = [
    ['id', 'Modifier', (id)=>`/session/${id}`]
  ]

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.getSessions()
  }

  async getSessions(){
    this.sessions = []
    this.sessions = <SessionModel[]> await this.crudService.getAll(BASE_API + SESSION).toPromise()
  }

}
