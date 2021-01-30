import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BASE_API, USER} from '../../globals/vars';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // @ts-ignore
  userForm: FormGroup;
  filieres : String[] = [
    'Genie Logiciel',
    'Informatique Industriel Et Automatique',
    'Instrumentation Et Maintenance Industrielle',
    'Resaux Et Telecommunications',
  ]

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initUserForm();
  }

  onCreateClick() {
    const x = Math.floor(Math.random() * Math.floor(128));
    this.authService.createUser(this.userForm.value).subscribe(
      (data) => {
        console.log(data);
        this.toastrService.success("User created successfully");
        this.router.navigate([""]);

      }, (error) => {
        console.log(error);
        this.toastrService.error("Please verify your data");

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
    });
  }
}
