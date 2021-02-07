import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Output() fileUrlEmitter = new EventEmitter()
  fileObj: File
  fileUrl: string
  constructor(
    private fileUploadService: FileUploadService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }
  onFilePicked(event: Event): void {
    const fileTarget = <HTMLInputElement> event.target;
    if (!fileTarget) {
      this.toastrService.error('Please select a file');
      return;
    }
    if (fileTarget.files?.length != 1) {
      this.toastrService.error('Please select exactly 1 file');
      return;
    }
    const file = fileTarget.files[0];
    this.fileObj = file;
   }

   onFileUpload() {
    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.fileUploadService.fileUpload(fileForm).subscribe(res => {
      if ('url' in res){
        this.fileUrl = res['url']
        this.fileUrlEmitter.emit(this.fileUrl)
        this.toastrService.success("Uploaded successfully")
      }
      else
        this.toastrService.error("Error when uploading file")
    });
   }

}
