import { Component, Directive, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'bootstrap';
import { Forum } from './forum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { Reply } from './reply';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
 


export class ForumComponent implements OnInit {
  reply:Reply=new Reply();
  isopened:boolean=false;
myModal:any
forum:Forum=new Forum()
response:any
  forums:any;
  forum1:any;
  replies:any;
token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
 .set("authorization","Bearer "+this.token);
  constructor(private storage:StorageService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    
    if(this.token==''){
      this.route.navigate(["/403"])
    }
    this.getForums();
var element = document.getElementById('threadModal') as HTMLElement;
 this.myModal = new Modal(element);
 this.forum.user.mat_Pers=this.storage.getUser()
  }
openModal(){
  this.myModal.show();
}


onCloseHandled(){
  this.myModal.hide();

}
onSubmit(){
  this.forum.replicount=1;
  let data=JSON.parse( JSON.stringify(this.forum));
  
  return this.http.post(this.baseURL+"/newforum",data,{headers:this.header})
.subscribe({
  next: (res) => {this.response=res,console.log(res)},
error: (err) => console.log(err),
complete: () => console.log("")

});
}
getForums(){
  return this.http.get(this.baseURL+"/forums",{headers:this.header})
  .subscribe({
    next: (res) => {console.log(res),this.forums=res},
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
}
getForumByid(event:any){
  let id=event.target.id
  return this.http.get(this.baseURL+"/forums/"+id,{headers:this.header})
  .subscribe({
    next: (res) => {console.log(res),this.forum1=res},
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
}
getReplies(event:any){
  let id=event.target.id
  return this.http.get(this.baseURL+"/forums/"+id+"/replies",{headers:this.header})
  .subscribe({
    next: (res) => {console.log(res),this.replies=res},
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
}
open(){
  this.isopened=true
}
close(){
  this.isopened=false
}
async Reply(){
this.reply.forum.id=this.forum1.id;
this.reply.user.mat_Pers=this.storage.getUser();
  let data=JSON.parse( JSON.stringify(this.reply));
  
  return this.http.post(this.baseURL+"/reply",data,{headers:this.header})
.subscribe({
  next: (res) => {this.response=res,console.log(res)},
error: (err) => {console.log(err),this.reload()},
complete: () => console.log("")

});
}
reload(){
 window.location.reload()
}
}
