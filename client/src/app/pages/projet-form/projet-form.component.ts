import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {BASE_API, PROJET, USER} from '../../globals/vars';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { StatutProjetEnum } from 'src/app/models/projet.model';

@Component({
  selector: 'app-projet-form',
  templateUrl: './projet-form.component.html',
  styleUrls: ['./projet-form.component.css']
})
export class ProjetFormComponent implements OnInit {

  // @ts-ignore
  projetForm: FormGroup;
  enseignants: UserModel[] = []
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService,
    private crudService: CrudService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initProjetForm();
    this.crudService.getAll(BASE_API + USER + '/enseignants').subscribe(
      (data) => {
        this.enseignants = <UserModel[]> data
      }, (error) => {
        console.log(error);
      }
    )
  }

  onCreateClick() {
    const projet = {
      ...this.projetForm.value,
      etudiant: this.authService.getLoggedInUser().id,
      statut: StatutProjetEnum.ENCOURS
    }
    console.log(PROJET, projet)
    this.crudService.post(BASE_API + PROJET, projet
      ).subscribe(
      (data) => {
        this.toastrService.success("Projet crée")
        this.router.navigate(['']);
      }, (error) => {
        this.toastrService.error("Erreur, veuillez valider vos données")
        console.log(error);
      }
    );
  }

  initProjetForm() {
    this.projetForm = this.fb.group({
      sujet: [null, Validators.compose([
        Validators.required
      ])],
      encadrant: [null, Validators.compose([
        Validators.required
      ])],
      societe: [null, Validators.compose([
        Validators.required, Validators.email
      ])],
      /*status: [null, Validators.compose([
        Validators.required
      ])],
      soutenance: [null, Validators.compose([
        Validators.required
      ])],
      etudiant: [null, Validators.compose([
        Validators.required
      ])],*/
    });
  }
}
