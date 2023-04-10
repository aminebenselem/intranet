import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { formation } from './formation';
@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {
 formation: formation= new formation();


    response?:any;
    a:any;
    token=this.storage.getToken();
    baseURL:String="http://localhost:9090"
    header=new HttpHeaders()
       .set("authorization","Bearer "+this.token);
  User: any;
   constructor(private http:HttpClient,private storage:StorageService) { }

  ngOnInit(): void {
    
  }

  addFormation(){
    let data=JSON.parse( JSON.stringify(this.formation));
    console.log(data)
    return this.http.post(this.baseURL+"/addformation",data,{headers:this.header})
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
