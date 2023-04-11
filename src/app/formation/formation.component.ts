import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { formation } from '../formation-admin/formation';
import { DownloadService } from '../services/downloadservice.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation: formation= new formation();
    response?:any;
    a:any;
    token=this.storage.getToken();
    baseURL:String="http://localhost:9090"
    header=new HttpHeaders()
       .set("authorization","Bearer "+this.token)

       
  User: any;
   constructor(private http:HttpClient,private storage:StorageService,private ss:DownloadService) { }
  ngOnInit(): void {
    this.getFormation()
    this.download()
    }
  getFormation(){
    return this.http.get(this.baseURL+"/getallformation",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.response=res;
       
     
         console.log(this.response)
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
 
  download() {
    return this.http.get( "http://localhost:9090/formation/vgr60797.dll",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.response=res;
       
     
         console.log(this.response)
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
}
