import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {BASE_API, SESSION} from '../../globals/vars';
import {SessionModel} from '../../models/session.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})

export class SessionListComponent implements OnInit {

  sessions: SessionModel[];

  constructor(private crudService: CrudService) {
  }

  ngOnInit() {
    this.sessions = [];
    this.getSessions();
  }

  getSessions() {
    this.crudService.getAll(BASE_API + SESSION).subscribe(
      // @ts-ignore
      (data: any[]) => {
        this.sessions = data;
        console.log(this.sessions);
      }, (error) => {
        console.log(error);
      }
    );
  }


}
