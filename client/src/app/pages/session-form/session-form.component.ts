import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {ANNEE, BASE_API, SESSION} from '../../globals/vars';
import {AnneeModel} from '../../models/annee.model';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  sessionForm: FormGroup;
  annees: AnneeModel[];

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initSessionForm();
    this.annees = [];
    this.getAnnees();
  }

  getAnnees() {
    this.crudService.getAll(BASE_API + ANNEE).subscribe(
      // @ts-ignore
      (data: any[]) => {
        this.annees = data;
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
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
