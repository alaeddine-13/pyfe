import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  behaviorSubject=new BehaviorSubject<boolean>(false);



  constructor(private http: HttpClient) {

  }

  getAll<T>(url: string) {
    return this.http.get<T>(url);
  }

  getOne<T>(url: string, id: string) {
    return this.http.get<T>(url + '/' + id);
  }

  post(url: string, values: any) {
    return this.http.post(url, values);
  }


  update(url: string, id: string, values: any) {
    return this.http.put(url + '/' + id, values);
  }

  delete(url: string, id: string) {
    return this.http.delete(url + '/' + id);
  }


}
