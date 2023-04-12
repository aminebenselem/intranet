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
       header1=new HttpHeaders()
       .set("authorization","Bearer "+this.token)
       .set("Content-Type","image/jpg");
       blob: any;
       
  User: any;
   constructor(private http:HttpClient,private storage:StorageService,private ss:DownloadService) { }
  ngOnInit(): void {
    this.getFormation()
    
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
 
  download(url:any,filename:any) {
    return this.ss.download(url)
    .subscribe({
      next: (data) => {
        console.log(data)
  this.blob = new Blob([data], {type: 'application/pdf'});

  var downloadURL = window.URL.createObjectURL(data);
  var link = document.createElement('a');
  link.href = downloadURL;
  link.download = filename;
  link.click();
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  getfilename(url:any){
return url.substring(url.lastIndexOf('/'),url.length)
  }
}
