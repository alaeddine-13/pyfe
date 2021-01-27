import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {BASE_API, SESSION} from '../../globals/vars';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

// @ts-ignore
  sessionForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initSessionForm();
  }

  onCreateClick() {
    this.crudService.post(BASE_API + SESSION, this.sessionForm).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }

  initSessionForm() {
    this.sessionForm = this.fb.group({
      nom: [null, Validators.compose([
        Validators.required
      ])],
      president: [null, Validators.compose([
        Validators.required
      ])],
      debut: [null, Validators.compose([
        Validators.required
      ])],
      fin: [null, Validators.compose([
        Validators.required
      ])],
      annee: [null, Validators.compose([
        Validators.required
      ])],
    });
  }
}
