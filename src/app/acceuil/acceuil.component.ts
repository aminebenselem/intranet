import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { StorageService } from '../services/storage.service';

import { User } from '../login/user';
import { Password } from './Password';
import { Router } from '@angular/router';
import { email } from './email';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  error:any

 User:User = new User();
 email:email = new email();
 x:Password = new Password();
  response:any
   myModal:any
   myModal1:any
   myModal2:any
  token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
   .set("authorization","Bearer "+this.token);
  constructor(private http:HttpClient,private storage:StorageService,private route:Router) { }

  ngOnInit(): void {
    
    if(this.token==''){
      this.route.navigate(["/403"])
    }
this.getUser()
var element = document.getElementById('threadModal') as HTMLElement;
 this.myModal = new Modal(element);
 var element = document.getElementById('threadModal1') as HTMLElement;
 this.myModal1= new Modal(element);
 var element = document.getElementById('threadModal2') as HTMLElement;
 this.myModal2 = new Modal(element);
  }
getUser(){
  
 return this.http.get(this.baseURL+"/users/"+this.storage.getUser(),{headers:this.header})
  .subscribe({
    next: (res) => {this.response=res;this.storage.storeUserRole(this.response.role)},
error: (err) =>{if(this.error.code==403){
  this.route.navigate(["/403"])
}} ,

complete: () => console.log("")

});
}
modifierEmail ()  {


  this.User.Mat_Pers=this.storage.getUser();
  let data=JSON.parse( JSON.stringify(this.User));

  console.log(data);
  return this.http.put(this.baseURL+"/updateemail",data,{headers:this.header}).subscribe(
    {
      next: (res) => {this.response=res;},
  error: (err) => console.log(err),
  complete: () => console.log("")}
  )

}
ModifierNumero ()  {
  this.User.Mat_Pers=this.storage.getUser();
  let data=JSON.parse(JSON.stringify(this.User));


  return this.http.put(this.baseURL+"/updatephone",data,{headers:this.header}).subscribe(
    {
      next: (res) => {this.response=res;},
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
        next: (res) => {this.response=res;},
    error: (err) => console.log(err),
    complete: () => console.log("")}
    )
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
}



