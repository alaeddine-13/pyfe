import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

const AUTH_API = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  roleAs: any;

  constructor(private http: HttpClient) {
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${AUTH_API}/signin`, credentials);
  }

  getLoggedInUser(): any {
    // username email role id
    const user = localStorage.getItem('user');
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    const user = this.getLoggedInUser();
    return user.role == 'admin';
  }

  createUsers(users: UserModel[]): Observable<any> {
    return this.http.post<any>(`${AUTH_API}/users`, users);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${AUTH_API}/signup`, user);
  }

  getRole() {
    const user = JSON.parse(<string> localStorage.getItem('user'));
    // @ts-ignore
    this.roleAs = user.role;
    return this.roleAs;
  }

}
