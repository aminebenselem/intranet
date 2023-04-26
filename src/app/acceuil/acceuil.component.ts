import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { StorageService } from '../services/storage.service';

import { User } from '../login/user';
import { Password } from './Password';
import { Router } from '@angular/router';
import { email } from './email';
import { FileDetails } from '../FileDetails';
import { FileUploadService } from '../services/file-upload.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  error:any
  file!: File;
  fileDetails!: FileDetails;
  fileUris: Array<string> = [];
  filename:string=""
 User:User = new User();
 email:email = new email();
 x:Password = new Password();
 family:any
  response:any
   myModal:any
   myModal1:any
   myModal2:any
  token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
   .set("authorization","Bearer "+this.token);
  constructor(private http:HttpClient,private storage:StorageService,private route:Router,private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    
this.getUser()
this.getUserFamily()
var element = document.getElementById('threadModal') as HTMLElement;
 this.myModal = new Modal(element);
 var element = document.getElementById('threadModal1') as HTMLElement;
 this.myModal1= new Modal(element);
 var element = document.getElementById('threadModal2') as HTMLElement;
 this.myModal2 = new Modal(element);
  }
  openModal(){
    this.myModal.show();
  }
  
  
  onCloseHandled(){
    this.myModal.hide();
  
  }
  openModal1(){
    this.myModal1.show();
  }
  
  
  onCloseHandled1(){
    this.myModal1.hide();
  
  }
  OpenModal2(){
    this.myModal2.show();
  }
  
  
  onCloseHandled2(){
    this.myModal2.hide();
  
  }
getUser(){
  
 return this.http.get(this.baseURL+"/user",{headers:this.header})
  .subscribe({
    next: (res) => {this.response=res;this.storage.storeUserRole(this.response.role)},
error: (err) =>{} ,

complete: () => console.log("")

});
}
getUserFamily(){
  
  return this.http.get(this.baseURL+"/famille",{headers:this.header})
   .subscribe({
     next: (res) => {this.family=res},
 error: (err) =>{} ,
 
 complete: () => console.log("")
 
 });
 }
modifierEmail ()  {


  this.User.Mat_Pers=this.storage.getUser();
  let data=JSON.parse( JSON.stringify(this.User));

  console.log(data);
  return this.http.put(this.baseURL+"/updateemail",data,{headers:this.header}).subscribe(
    {
      next: (res) => {this.response=res;this.reloadPage()},
  error: (err) => console.log(err),
  complete: () => console.log("")}
  )

}
ModifierNumero ()  {
  this.User.Mat_Pers=this.storage.getUser();
  let data=JSON.parse(JSON.stringify(this.User));


  return this.http.put(this.baseURL+"/updatephone",data,{headers:this.header}).subscribe(
    {
      next: (res) => {this.response=res;this.reloadPage()},
  error: (err) => console.log(err),
  complete: () => console.log("")}
  )

}
ModifierPassword (){
    this.x.Mat_Pers=this.storage.getUser();
    let data=JSON.parse( JSON.stringify(this.x));
    console.log(data);
    return this.http.post(this.baseURL+"/updatepassword",data,{headers:this.header}).subscribe(
      {
        next: (res) => {this.response=res;this.reloadPage()},
    error: (err) => console.log(err),
    complete: () => console.log("")}
    )
}


reloadPage() {
  window.location.reload();
}
selectFile(event: any) {
  this.file = event.target.files.item(0);
}
 getFileUri(){
 
return "http://localhost:9090/image/"+this.filename;

}
uploadFile() {
  this.fileUploadService.upload(this.file,this.filename,"/upload").subscribe({
    next: (data) => {
      {this.fileDetails = data,console.log(data),this.reloadPage()};
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
  changerPhoto(){
     this.filename=this.getFilename(this.file)
     this.uploadFile();
     this.User.MDP=this.getFileUri()
     this.User.Mat_Pers=this.storage.getUser()
      return this.http.put(this.baseURL+"/updatephoto",this.User,{headers:this.header}).subscribe({
       next: (res) => {this.response=res,console.log(res),this.reloadPage()},
     error: (err) => {console.log(err)},
     complete: () => {console.log("")}
     
     });
     
}



}
