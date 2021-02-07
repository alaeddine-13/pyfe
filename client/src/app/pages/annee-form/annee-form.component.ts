import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {ANNEE, BASE_API} from '../../globals/vars';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-annee-form',
  templateUrl: './annee-form.component.html',
  styleUrls: ['./annee-form.component.css']
})
export class AnneeFormComponent implements OnInit {

  // @ts-ignore
  anneeForm: FormGroup;
  anneeId: any = null;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    if (route.snapshot.params.id) {
      this.anneeId = route.snapshot.params.id;
    }
  }

  ngOnInit() {
    this.initAnneeForm();
  }

  onSubmitClick() {
    if (!this.anneeId) {
      this.crudService.post(BASE_API + ANNEE, this.anneeForm.value).subscribe(
        (data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        }
      );
    } else {
      this.crudService.update(BASE_API + ANNEE, this.anneeId, this.anneeForm.value).subscribe(
        (data) => {
          console.log(data);
        }, (error) => {
          console.log(error);
        }
      );
    }
  }

  initAnneeForm() {
    this.anneeForm = this.fb.group({
      annee: ['', Validators.compose([
        Validators.required
      ])],
    });

    if (this.anneeId) {
      this.crudService.getOne(BASE_API + ANNEE, this.anneeId)
        .pipe(first())
        .subscribe(x => {
            // @ts-ignore
            this.anneeForm.patchValue(x);
          }
        );
    }
  }
}
