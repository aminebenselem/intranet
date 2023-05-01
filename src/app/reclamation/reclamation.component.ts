import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { User } from '../login/user';
import { Reclamation } from './reclamtion';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  x:User = new User();
reclamation:Reclamation=new Reclamation();

    response?:any;
 
    token=this.storage.getToken();
    baseURL:String="http://localhost:9090"
   
  User: any;
   constructor(private http:HttpClient,private storage:StorageService) { }
  ngOnInit(): void {
  }

  ajouterReclamation(){
    this.reclamation.user.mat_Pers=this.storage.getUser();
    let data=JSON.parse( JSON.stringify(this.reclamation));
    console.log(data)
    return this.http.post(this.baseURL+"/newrec",data)
     .subscribe(
      {
        next: (res) => {this.response=res;
          window.location.reload();
          console.log(this.response)
         },
     error: (err) => console.log(err),
     complete: () => console.log("")
      }
     )
  }
}
