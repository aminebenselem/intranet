import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Event } from './event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {
  event :Event=new Event()
  response:any
  
  token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
   .set("authorization","Bearer "+this.token);
  constructor(private storage:StorageService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    
    if(this.token==''){
      this.route.navigate(["/403"])
    }
  }
  onSubmit(){
    let data=JSON.parse( JSON.stringify(this.event));
  
    return this.http.post(this.baseURL+"/newevent",data,{headers:this.header})
  .subscribe({
    next: (res) => {this.response=res,console.log(res)},
error: (err) => console.log(err),
complete: () => console.log("")

});

}
}