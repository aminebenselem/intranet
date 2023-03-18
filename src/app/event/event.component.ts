import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { time } from 'console';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events:any=[]
   date :Date=new Date()
  responses?:any;
  token=this.storage.getToken();
  baseURL:String="http://localhost:9090"
  header=new HttpHeaders()
     .set("authorization","Bearer "+this.token);
 constructor(private http:HttpClient,private storage:StorageService) { }

  ngOnInit(): void {
this.getEvents()
  }
  getEvents(){
    return this.http.get(this.baseURL+"/events",{headers:this.header})
    .subscribe({
      next: (res) => {this.responses=res,console.log(res);
        for(let response of this.responses){
          response.date=new Date(response.date)
          this.events.push(response)

        }      
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  
  }

  
}
