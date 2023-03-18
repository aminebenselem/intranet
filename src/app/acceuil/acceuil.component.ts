import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
   response:any
  token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
   .set("authorization","Bearer "+this.token);
  constructor(private http:HttpClient,private storage:StorageService) { }

  ngOnInit(): void {
this.getUser()
  }
getUser(){
  
 return this.http.get(this.baseURL+"/users/"+this.storage.getUser(),{headers:this.header})
  .subscribe({
    next: (res) => {this.response=res},
error: (err) => console.log(err),
complete: () => console.log("")

});
}
}



