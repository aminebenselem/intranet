import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { formation } from './formation';
import { FileDetails } from '../FileDetails';
import { FileUploadService } from '../services/file-upload.service';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { userFormation } from './userFormation';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {

 formation: formation= new formation();
 userformation: userFormation= new userFormation();

 responses:any=[]
 users:any=[]
selectedusers:any=[]
pers:any=[]
suser:any
 file!: File;
   fileDetails!: FileDetails;
   fileUris: Array<string> = [];

 response:any
   filename:string=""
 token=this.storage.getToken();
 baseURL:String="http://localhost:9090"
 header=new HttpHeaders()
  .set("authorization","Bearer "+this.token);
  searchtext: any;
 constructor(private storage:StorageService,private http:HttpClient,private fileUploadService: FileUploadService, private router: Router) { }
   
 
 ngOnInit(): void {
  this.getUsers()
 }
 OnSubmit(){
  this.filename=this.getFilename(this.file)
   this.uploadFile()
   this.formation.uri=this.getFileUri()
this.userformation.formation=this.formation
this.userformation.users=this.pers
  let data=JSON.parse( JSON.stringify(this.userformation));
   return this.http.post(this.baseURL+"/addformationUser",data,{headers:this.header})
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
     let extension =filename.substring(filename.lastIndexOf('.'), filename.length) || filename;
    return filename.substring(0,filename.lastIndexOf('.')-1)+this.getWord()+'.'+extension;
   
   }

   getUsers(){

    return this.http.get(this.baseURL+"/users",{headers:this.header})
    .subscribe({
      next: (res) => {this.responses=res,console.log(res);
        for(let i=0;i<495;i++){
         this.users.push(this.responses[i])
        }
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  change(event:any){

this.users.forEach((user: any) => {
  if (user.nom_PERS+" "+user.pren_PERS===this.suser){
    
    this.pers.push(user.mat_Pers)
    this.selectedusers.push(user)
  }
});


this.suser="";
  }
  
delete(user:any){
  const index: number = this.selectedusers.indexOf(user);
  const index2: number = this.pers.indexOf(user.mat_Pers);

  if (index !== -1) {
      this.selectedusers.splice(index, 1);
      this.pers.splice(index2, 1);
  }    
   

}

 }
