import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  filename: any = null;
  buffer: any = null;
  constructor(
    private excelService: ExcelService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUsers(users: any) {
    this.authService.createUsers(users).subscribe(
      (response) => {
        console.log(response)
        this.toastrService.success('Users created successfully');
        this.router.navigate(['login']);
      },
      (erreur) => {
        this.toastrService.error('Please make sure your data is valid');
      }
    );
  }

  async getFilename(fileInput: Event){
    const fileTarget = <HTMLInputElement>fileInput.target;
    if (!fileTarget){
      this.toastrService.error("Please select a file");
      return
    }
    if (fileTarget.files?.length != 1){
      this.toastrService.error("Please select exactly 1 file");
      return
    }

    this.filename = await fileTarget.files[0].text();
  }

  async handleFileSelect(event: Event) {
    const fileTarget = <HTMLInputElement>event.target;
    if (!fileTarget){
      this.toastrService.error("Please select a file");
      return
    }
    if (fileTarget.files?.length != 1){
      this.toastrService.error("Please select exactly 1 file");
      return
    }
    const file = fileTarget.files[0];
    
    let binary = "";
    const bytes = new Uint8Array(await file.arrayBuffer());
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    this.buffer = binary
    console.log(this.buffer)
    
}

  submit(){
    if(!this.buffer){
      this.toastrService.error("Please import an excel file before submitting");
      return
    }
    const users = this.excelService.importFromFile(this.buffer);
    this.createUsers(UserModel.from_json(<string[][]>users));
  }

}
