import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {BASE_API, PROJET, USER} from '../../globals/vars';
import {AuthService} from 'src/app/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {UserModel} from 'src/app/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {StatutProjetEnum} from 'src/app/models/projet.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-projet-form',
  templateUrl: './projet-form.component.html',
  styleUrls: ['./projet-form.component.css']
})
export class ProjetFormComponent implements OnInit {

  // @ts-ignore
  projetForm: FormGroup;
  enseignants: UserModel[] = [];
  projetId: any = null;

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService,
    private crudService: CrudService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    if (route.snapshot.params.id) {
      this.projetId = route.snapshot.params.id;
    }
  }

  ngOnInit() {
    this.initProjetForm();
    this.crudService.getAll(BASE_API + USER + '/enseignants').subscribe(
      (data) => {
        this.enseignants = <UserModel[]> data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  onSubmitClick() {
    const projet = {
      ...this.projetForm.value,
      etudiant: this.authService.getLoggedInUser().id,
      statut: StatutProjetEnum.ENCOURS
    };
    console.log(PROJET, projet);
    if (!this.projetId) {
      this.crudService.post(BASE_API + PROJET, projet
      ).subscribe(
        (data) => {
          this.toastrService.success('Projet créé');
          this.router.navigate(['']);
        }, (error) => {
          this.toastrService.error('Erreur, veuillez valider vos données');
          console.log(error);
        }
      );
    } else {
      this.crudService.update(BASE_API + PROJET, this.projetId, projet
      ).subscribe(
        (data) => {
          this.toastrService.success('Projet modifié');
          this.router.navigate(['']);
        }, (error) => {
          this.toastrService.error('Erreur, veuillez valider vos données');
          console.log(error);
        }
      );
    }
  }

  initProjetForm() {
    this.projetForm = this.fb.group({
      sujet: ['', Validators.compose([
        Validators.required
      ])],
      encadrant: ['', Validators.compose([
        Validators.required
      ])],
      societe: ['', Validators.compose([
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
    if (this.projetId) {
      this.crudService.getOne(BASE_API + PROJET, this.projetId)
        .pipe(first())
        // @ts-ignore
        .subscribe(x => this.projetForm.patchValue(x));
    }
  }
}
