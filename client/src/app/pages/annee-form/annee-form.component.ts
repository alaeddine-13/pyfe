import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {ANNEE, BASE_API} from '../../globals/vars';

@Component({
  selector: 'app-annee-form',
  templateUrl: './annee-form.component.html',
  styleUrls: ['./annee-form.component.css']
})
export class AnneeFormComponent implements OnInit {

  // @ts-ignore
  anneeForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initAnneeForm();
  }

  onCreateClick() {
    this.crudService.post(BASE_API + ANNEE, this.anneeForm.value).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }

  initAnneeForm() {
    this.anneeForm = this.fb.group({
      annee: [null, Validators.compose([
        Validators.required
      ])],
    });
  }
}
