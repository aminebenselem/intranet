import { Component, OnInit } from '@angular/core';
import { ReplyRec } from './replyrec';
import { Reclamation } from '../reclamation/reclamtion';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-suivi-reclamation',
  templateUrl: './suivi-reclamation.component.html',
  styleUrls: ['./suivi-reclamation.component.css']
})
export class SuiviReclamationComponent implements OnInit {
  reply:ReplyRec=new ReplyRec();
  isopened:boolean=false;
myModal:any
user=this.storage.getUser()
reclamation:Reclamation=new Reclamation()
response:any
  reclamations:any;
  forum1:any;
  replies:any;
token=this.storage.getToken();
role=this.storage.getUserRole()
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
 .set("authorization","Bearer "+this.token);
  constructor(private storage:StorageService,private http:HttpClient,private route:Router) { }


  ngOnInit(): void {
    
    this.getForums();
    this.reclamation.user.mat_Pers=this.storage.getUser()

  }

 
  getForums(){
    return this.http.get(this.baseURL+"/reclamation",{headers:this.header})
    .subscribe({
      next: (res) => {console.log(res),this.reclamations=res},
    error: (err) => console.log(err),
    complete: () => console.log("")
    
    });
  }
  getForumByid(event:any){
    let id=event.target.id
    return this.http.get(this.baseURL+"/reclamation/"+id,{headers:this.header})
    .subscribe({
      next: (res) => {console.log(res),this.forum1=res},
    error: (err) => console.log(err),
    complete: () => console.log("")
    
    });
  }
  getReplies(id:any){
    return this.http.get(this.baseURL+"/reclamation/"+id+"/replies",{headers:this.header})
    .subscribe({
      next: (res) => {console.log(res),this.replies=res},
    error: (err) => {console.log(err),this.reload()},
    complete: () => console.log("")
    
    });
  }
  open(){
    this.isopened=true
  }
  close(){
    this.isopened=false
  }
  Reply(){
  this.reply.reclamation.id=this.forum1.id;
  this.reply.user.mat_Pers=this.storage.getUser();
    let data=JSON.parse( JSON.stringify(this.reply));
    
    return this.http.post(this.baseURL+"/replyRec",data,{headers:this.header})
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
