import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {ANNEE, BASE_API, SESSION} from '../../globals/vars';
import {AnneeModel} from '../../models/annee.model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  sessionForm: FormGroup;
  annees: AnneeModel[];
  sessionId: any = null;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {
    if (route.snapshot.params.id) {
      this.sessionId = route.snapshot.params.id;
    }
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

  onSubmitClick() {
    console.log(this.sessionForm.value);
    if (!this.sessionId) {
      this.crudService.post(BASE_API + SESSION, this.sessionForm.value).subscribe(
        (data) => {
          console.log(data);
          this.toastrService.success('Session créée');
          this.router.navigate(['']);

        }, (error) => {
          this.toastrService.error('Création de la session échouée, veuillez valider les données');
          console.log(error);
        }
      );
    } else {
      this.crudService.update(BASE_API + SESSION, this.sessionId, this.sessionForm.value).subscribe(
        (data) => {
          console.log(data);
          this.toastrService.success('Session modifiée');
        }, (error) => {
          this.toastrService.error('Modification de la session échouée, veuillez valider les données');
          console.log(error);
        }
      );
    }
  }

  initSessionForm() {
    this.sessionForm = this.fb.group({
      nom: ['', Validators.compose([
        Validators.required
      ])],
      president: ['', Validators.compose([
        Validators.required
      ])],
      debut: ['', Validators.compose([
        Validators.required
      ])],
      fin: ['', Validators.compose([
        Validators.required
      ])],
      annee: ['', Validators.compose([
        Validators.required
      ])],
    });

    if (this.sessionId) {
      this.crudService.getOne(BASE_API + SESSION, this.sessionId)
        .pipe(first())
        // @ts-ignore
        .subscribe(x => this.sessionForm.patchValue(x));
    }
  }
}
