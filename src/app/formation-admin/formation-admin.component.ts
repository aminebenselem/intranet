import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { formation } from './formation';
import { FileDetails } from '../FileDetails';
import { FileUploadService } from '../services/file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {
 formation: formation= new formation();

 file!: File;
   fileDetails!: FileDetails;
   fileUris: Array<string> = [];

 response:any
   filename:string=""
 token=this.storage.getToken();
 baseURL:String="http://localhost:9090"
 header=new HttpHeaders()
  .set("authorization","Bearer "+this.token);
 constructor(private storage:StorageService,private http:HttpClient,private fileUploadService: FileUploadService, private router: Router) { }
   
 
 ngOnInit(): void {
 }
 onSubmit(){
   this.filename=this.getFilename(this.file)
   this.uploadFile()
   this.formation.uri=this.getFileUri()
  
   let data=JSON.parse( JSON.stringify(this.formation));
   return this.http.post(this.baseURL+"/addformation",data,{headers:this.header})
 .subscribe({
   next: (res) => {this.response=res,console.log(res)},
 error: (err) => {console.log(err)},
 complete: () => {console.log("")}
 
 });
 
 }
 reloadPage() {
   window.location.reload();
 }
 selectFile(event: any) {
   this.file = event.target.files.item(0);
   
 }
  getFileUri(){
  
 return "http://localhost:9090/formation/"+this.filename;
 
 }
 uploadFile() {
   this.fileUploadService.upload(this.file,this.filename,"/uploadformation").subscribe({
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
 
   
 
   getWord(minLength: number = 4, maxLength: number = 10):any {
     return Math.trunc(Math.random() * (100000));
   
   }
   getFilename(file: File){
     let filename=file.name
     let extension =filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
    return filename.substring(0,filename.lastIndexOf('.')-1)+this.getWord()+'.'+extension;
   
   }
 }
