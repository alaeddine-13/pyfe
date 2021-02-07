import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false
  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    console.log("navbar", this.authService.isAuthenticated())
    this.isAuthenticated = this.authService.isAuthenticated()
    
  }

  logout() {
    this.authService.logout();
    this.toastr.info('Logged out');
    this.router.navigate(['login']);
  }
}
