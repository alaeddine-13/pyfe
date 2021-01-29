import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../services/crud.service';
import {BASE_API, USER} from '../../globals/vars';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // @ts-ignore
  userForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initUserForm();
  }

  onCreateClick() {
    const x = Math.floor(Math.random() * Math.floor(128));
    this.userForm.controls.salt.setValue(x);
    this.crudService.post(BASE_API + USER, this.userForm.value).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }

  initUserForm() {
    this.userForm = this.fb.group({
      nom: [null, Validators.compose([
        Validators.required
      ])],
      prenom: [null, Validators.compose([
        Validators.required
      ])],
      username: [null, Validators.compose([
        Validators.required
      ])],
      email: [null, Validators.compose([
        Validators.required, Validators.email
      ])],
      password: [null, Validators.compose([
        Validators.required
      ])],
      role: [null, Validators.compose([
        Validators.required
      ])],
      telephone: [null, Validators.compose([
        Validators.required
      ])],
      datenaissance: [null, Validators.compose([
        Validators.required
      ])],
      filiere: [null, Validators.compose([
        Validators.required
      ])],
      salt: [null, Validators.compose([
        Validators.required
      ])],
    });
  }
}
