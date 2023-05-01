import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
  export class HeaderComponent implements OnInit {
    constructor(private http:HttpClient ,private storage:StorageService) { }
 response:any
 baseURL="http://localhost:9090"
 header=new HttpHeaders()
 .set("authorization","Bearer "+this.storage.getToken())

    ngOnInit(): void {
     
    
    }
    
  

}
