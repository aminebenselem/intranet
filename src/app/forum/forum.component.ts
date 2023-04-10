import { Component, Directive, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'bootstrap';
import { Forum } from './forum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
 


export class ForumComponent implements OnInit {
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
  constructor(private storage:StorageService,private http:HttpClient ) { }

  ngOnInit(): void {
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
lCase(name:string){
  return name.toLowerCase()
}

}
