import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

const AUTH_API = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${AUTH_API}/signin`, credentials);
  }

  getLoggedInUser(): any {
    const user = localStorage.getItem('user') //username email role id
    if (!user)
      return null
    return JSON.parse(user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token')!==null;
  }

  isNotAuthenticated(): boolean {
    const result = localStorage.getItem('token')===null;
    return result
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
}
