import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {BASE_API, PROJET} from '../../globals/vars';

@Component({
  selector: 'app-projet-form',
  templateUrl: './projet-form.component.html',
  styleUrls: ['./projet-form.component.css']
})
export class ProjetFormComponent implements OnInit {

  // @ts-ignore
  projetForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initProjetForm();
  }

  onCreateClick() {
    this.crudService.post(BASE_API + PROJET, this.projetForm.value).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }

  initProjetForm() {
    this.projetForm = this.fb.group({
      sujet: [null, Validators.compose([
        Validators.required
      ])],
      etudiant: [null, Validators.compose([
        Validators.required
      ])],
      encadrant: [null, Validators.compose([
        Validators.required
      ])],
      societe: [null, Validators.compose([
        Validators.required, Validators.email
      ])],
      status: [null, Validators.compose([
        Validators.required
      ])],
      soutenance: [null, Validators.compose([
        Validators.required
      ])],
    });
  }
}
