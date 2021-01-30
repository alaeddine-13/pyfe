import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  signup(signupForm: NgForm) {
    this.authService.signup(signupForm.value).subscribe(
      (response) => {
        this.toaster.success('Signed up successfully, please log in');
        this.router.navigate(['login']);
      },
      (erreur) => {
        this.toaster.error('Please make sure your data is valid');
      }
    );
  }
}
