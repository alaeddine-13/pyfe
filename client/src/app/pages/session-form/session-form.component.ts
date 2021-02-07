import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {ANNEE, BASE_API, SESSION} from '../../globals/vars';
import {AnneeModel} from '../../models/annee.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
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
        console.log(this.annees);
      }, (error) => {
        console.log(error);
      }
    );
  }

  onCreateClick() {
    console.log(this.sessionForm.value)
    this.crudService.post(BASE_API + SESSION, this.sessionForm.value).subscribe(
      (data) => {
        console.log(data);
        this.toastrService.success("Session créee")
        this.router.navigate([''])

      }, (error) => {
        this.toastrService.error("Création de la session échouée, veuillez valider les données")
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
