import { Component, OnInit, Input } from '@angular/core';
import { ProjetModel } from 'src/app/models/projet.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BASE_API, SOUTENANCE, SESSION } from 'src/app/globals/vars';

@Component({
  selector: 'app-soutenance-form',
  templateUrl: './soutenance-form.component.html',
  styleUrls: ['./soutenance-form.component.css']
})
export class SoutenanceFormComponent implements OnInit {
  @Input() projet:ProjetModel;
  sessions: any;

    // @ts-ignore
    soutenanceForm: FormGroup;
    constructor(
      private router: Router,
      private toastrService: ToastrService,
      private crudService: CrudService,
      private fb: FormBuilder
    ) {
  
    }
  
    ngOnInit() {
      this.initSoutenanceForm();
      this.crudService.getAll(BASE_API + SESSION + "/formatted").subscribe(
        (data) => {
          this.sessions = data
          console.log(this.sessions)
        }, (error) => {
          console.log(error);
        }
      )
    }
  
    onCreateClick() {
      const soutenance = {
        ...this.soutenanceForm.value,
        projet: this.projet.projet_id
      }
      console.log(soutenance)
      this.crudService.post(BASE_API + SOUTENANCE, soutenance
        ).subscribe(
        (data) => {
          this.toastrService.success("Soutenance crée")
          this.router.navigate(['']);
        }, (error) => {
          this.toastrService.error("Erreur, veuillez valider vos données")
          console.log(error);
        }
      );
    }
  
    initSoutenanceForm() {
      this.soutenanceForm = this.fb.group({
        rapport: [null, Validators.compose([
          Validators.required
        ])],
        salle: [null, Validators.compose([
          Validators.required
        ])],
        date: [null, Validators.compose([
          Validators.required
        ])],
        session: [null, Validators.compose([
          Validators.required
        ])],
      });
    }
  }
  
  