import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import  jwt_decode from "jwt-decode";
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
  export class HeaderComponent implements OnInit {
    constructor(private http:HttpClient ,private storage:StorageService) { }
    role:any=''
 response:any
 baseURL="http://localhost:9090"
 header=new HttpHeaders()
 .set("authorization","Bearer "+this.storage.getToken())

    ngOnInit(): void {
     
     console.log( this.getUserRole(this.storage.getToken()))
    }
    getUserRole(token:any){
      try {
        return jwt_decode(token);
      } catch(Error) {
        return null;
      }
     }
  

}
