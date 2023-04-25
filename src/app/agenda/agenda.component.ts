import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { User } from '../login/user';
import { agenda } from './agenda';
import { Console } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit 
{
  x:User = new User();
  y:agenda = new agenda();
  z:agenda = new agenda();
  agenda:any=[];
    response?:any;
    a:any;
    token=this.storage.getToken();
    baseURL:String="http://localhost:9090"
    header=new HttpHeaders()
       .set("authorization","Bearer "+this.token);
  User: any;
   constructor(private http:HttpClient,private storage:StorageService,private route:Router) { }
 
   ngOnInit(): void {
    
    if(this.token==''){
      this.route.navigate(["/403"])
    }
     this.gettasks()
   }
 gettasks(){
   return this.http.get(this.baseURL+"/users"+"/tasks",{headers:this.header})
   .subscribe({
     next: (res) => {
      this.response=res;
      this.agenda=this.response;
    
        console.log(this.agenda)
       
     },
 error: (err) => console.log(err),
 complete: () => console.log("")
 
 });
 }
 deleteTask(event:any){
let id=event.target.id
console.log(id)
  return this.http.delete(this.baseURL+"/delete"+"?id="+id,{headers:this.header})
  .subscribe({
    next: (res) => {
      window.location.reload();
   
       console.log(this.agenda)
      
    },
error: (err) => console.log(err),
complete: () => console.log("")

});
 }

 createtask(){
  this.y.user.mat_Pers=this.storage.getUser();
  let data=JSON.parse( JSON.stringify(this.y));
  console.log(data)
  return this.http.post(this.baseURL+"/newtask",data,{headers:this.header})
   .subscribe(
    {
      next: (res) => {this.response=res;
        window.location.reload();
        console.log(this.response)
       },
   error: (err) => console.log(err),
   complete: () => console.log("")
    }
   )
 }
 }
