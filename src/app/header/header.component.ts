import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Notification } from '../Notification';
import { AcceuilComponent} from '../acceuil/acceuil.component';
import { User } from '../login/user';

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
  
  export class HeaderComponent implements OnInit {
    constructor(private http:HttpClient ,private storage:StorageService) { }
    notific:Notification=new Notification()
    isopen:boolean=false;
notifications:any=[]
notifnumber:any=0
 response:any
 responses:any
 user:User=new User();
 baseURL="http://localhost:9090"
 header=new HttpHeaders()
 .set("authorization","Bearer "+this.storage.getToken())

    ngOnInit(): void {
    
      this.getNotif()
      let list=document.getElementById("notif") 
      list?.addEventListener('blur', (event) => {
        list?.classList.remove('active');
      });
      this.getuser();
    }
 
  closeOpen(){
    if(this.notifications.length !=0){
    let list=document.getElementById("notif") 
    if (this.isopen){
      list?.classList.remove("active")
this.isopen=false
     }
     else{
      list?.classList.add("active")
      this.isopen=true
     }
    }
  }
  getNotif(){
    return this.http.get(this.baseURL+"/mesnotification",{headers:this.header})
    .subscribe({
      next: (res) => {this.notifications=res,console.log(res);
        this.notifications.reverse()
        this.notifications.forEach((element: any) => {
          if(element.viewed==false){
this.notifnumber=this.notifnumber+1
          }
        });
        console.log(this.notifnumber)
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  readNotification(){
    for(let i =0;i<this.notifications.length;i++) {
      if(this.notifications[i].viewed==false){
        this.notific.message=this.notifications[i].message
        this.notific.user.mat_Pers=this.notifications[i].user.mat_Pers
        this.notific.id=this.notifications[i].id
        this.notific.viewed=this.notifications[i].viewed
       
        let data=JSON.parse( JSON.stringify(this.notific));
        console.log(data)
        this.update(data)
      }
    };
  }
update(notif:any){
  console.log(notif)
  console.log("dfghhj")
  return this.http.put(this.baseURL+"/updateviewed",notif,{headers:this.header}).subscribe({
    next:(res)=>{console.log(res)},
    error:(err)=>{console.log(err)},
    complete:()=>{}
  });
}
getuser(){
  return this.http.get(this.baseURL+"/user",{headers:this.header}).subscribe({
    next:(res)=>{console.log(res)
   this.responses=res;
      this.user.uri=this.responses.uri},
    error:(err)=>{console.log(err)},
    complete:()=>{}
  });
}
}
