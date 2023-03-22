import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileDetails } from '../FileDetails';
import { FileUploadService } from '../services/file-upload.service';
import { StorageService } from '../services/storage.service';
import { Act } from './act';

@Component({
  selector: 'app-actualites-admin',
  templateUrl: './actualites-admin.component.html',
  styleUrls: ['./actualites-admin.component.css']
})
export class ActualitesAdminComponent implements OnInit {
  file!: File;
  fileDetails!: FileDetails;
  fileUris: Array<string> = [];
act:Act=new Act()
response:any
  
token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
 .set("authorization","Bearer "+this.token);
constructor(private storage:StorageService,private http:HttpClient,private fileUploadService: FileUploadService, private router: Router) { }

ngOnInit(): void {
}
onSubmit(){
  this.uploadFile()
  let data=JSON.parse( JSON.stringify(this.act));
  return this.http.post(this.baseURL+"/newact",data,{headers:this.header})
.subscribe({
  next: (res) => {this.response=res,console.log(res),this.act.uri[0]=""},
error: (err) => {console.log(err),this.act.uri[0]=""},
complete: () => {console.log(""),this.act.uri[0]=""}

});

}
reloadPage() {
  window.location.reload();
}
selectFile(event: any) {
  this.file = event.target.files.item(0);
}
 getFileUri(event: any){
 this.act.uri.push("http://localhost:9090/image/"+event.target.files.item(0).name);

}
uploadFile() {
  this.fileUploadService.upload(this.file).subscribe({
    next: (data) => {
      {this.fileDetails = data,console.log(data)};
      this.fileUris.push(this.fileDetails.fileUri);
      alert("File Uploaded Successfully")
    },
    error: (e) => {
      console.log(e);
    }
  });
}
}
