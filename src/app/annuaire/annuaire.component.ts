import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent implements OnInit {
 users:any=[]
   responses?:any=[];
   token=this.storage.getToken();
   baseURL:String="http://localhost:9090"
   header=new HttpHeaders()
      .set("authorization","Bearer "+this.token);
  constructor(private http:HttpClient,private storage:StorageService) { }

  ngOnInit(): void {
    this.getUsers()
  }
getUsers(){

  return this.http.get(this.baseURL+"/users",{headers:this.header})
  .subscribe({
    next: (res) => {this.responses=res;
      for(let i=0;i<495;i++){
       this.users.push(this.responses[i])
      }
      
    },
error: (err) => console.log(err),
complete: () => console.log("")

});
}
}
