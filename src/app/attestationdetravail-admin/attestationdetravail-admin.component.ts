import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { DownloadService } from '../services/downloadservice.service';
import { demandeModel } from './demandeModel';

@Component({
  selector: 'app-attestationdetravail-admin',
  templateUrl: './attestationdetravail-admin.component.html',
  styleUrls: ['./attestationdetravail-admin.component.css']
})
export class AttestationdetravailAdminComponent implements OnInit {
  response?:any=[];
  responses?:any;
 token=this.storage.getToken();
 baseURL:String="http://localhost:9090"
 header=new HttpHeaders()
    .set("authorization","Bearer "+this.token);
  blob: any;
  demande:demandeModel=new demandeModel();

constructor(private http:HttpClient,private storage:StorageService,private route:Router,private ss:DownloadService) { }
  ngOnInit(): void {
    this.getallactualite();
  }
  getId(event:any){
    this.demande.id=event.target.id;
    console.log(event.target)
   }
   reloadPage() {
    window.location.reload();
  }
 
  getallactualite(){

    return this.http.get(this.baseURL+"/getdemandes",{headers:this.header})
    .subscribe({
      next: (res) => {this.responses=res
        console.log(this.responses)
           for ( let i=0;i<this.responses.length;i++){
            if (this.responses[i].proved=="en attente"){
              this.response.push(this.responses[i])
            }
           }
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

  updateEtat(){
    
this.demande.proved="en cours de traitement"
let data=JSON.parse( JSON.stringify(this.demande));
console.log(data)
return this.http.put(this.baseURL+"/update",data,{headers:this.header}).subscribe(
  {
    next: (res) => {console.log(res);window.location.reload()
   
    },
error: (err) => console.log(err),
complete: () => console.log("")
  }
)

  }
  

}
