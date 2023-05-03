import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.css']
})
export class PointageComponent implements OnInit {
  responses:any=[]
  baseURL="http://localhost:9090"
  header=new HttpHeaders()
  .set("authorization","Bearer "+this.storage.getToken())
 
  constructor(private http:HttpClient,private storage:StorageService) { }

  ngOnInit(): void {
    this.getPointage()
  }
getPointage(){
  return this.http.get(this.baseURL+"/monPointage",{headers:this.header}).subscribe({
next:(res)=>{this.responses=res,console.log(res),this.responses.reverse()},
error:(err)=>{alert("un erreur est survenu"),console.log(err)},
complete:() => {console.log("")}

  })
}
}
