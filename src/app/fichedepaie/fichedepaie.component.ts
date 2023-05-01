import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-fichedepaie',
  templateUrl: './fichedepaie.component.html',
  styleUrls: ['./fichedepaie.component.css']
})
export class FichedepaieComponent implements OnInit {
  token=this.storage.getToken();
  baseURL:String="http://localhost:9090/fichedepaie"
  header=new HttpHeaders()
  .set("authorization","Bearer "+this.token);
   constructor(private storage:StorageService,private http:HttpClient,private route:Router) { }
  ngOnInit(): void {
    this.getFiche();
  }

  getFiche(){
    return this.http.get(this.baseURL+"/getallfiche",{headers:this.header})
    .subscribe({
      next: (res) => {console.log(res)},
    error: (err) => console.log(err),
    complete: () => console.log("")
    
    });
  }
}
