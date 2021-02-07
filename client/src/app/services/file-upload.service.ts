import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API, UPLOAD } from '../globals/vars';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private http: HttpClient
  ) { }

  fileUpload(fileForm: FormData) {
    return this.http.post(BASE_API + UPLOAD, fileForm);
   }
}
