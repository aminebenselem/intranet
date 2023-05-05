import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { DownloadService } from '../services/downloadservice.service';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-fichedepaie',
  templateUrl: './fichedepaie.component.html',
  styleUrls: ['./fichedepaie.component.css']
})
export class FichedepaieComponent implements OnInit {
  token=this.storage.getToken();
  baseURL:String="http://localhost:9090/fichedepaie"
  responses?:any=[];
  response?:any=[];

  header=new HttpHeaders()
  .set("authorization","Bearer "+this.token);
  blob: any;
  constructor(private storage:StorageService,private http:HttpClient,private ss:DownloadService,private fileUploadService: FileUploadService, private router: Router) { }
  ngOnInit(): void {
    this.getFiche();
  }

  getFiche(){
    return this.http.get(this.baseURL+"/getficheforuser ",{headers:this.header})
    .subscribe({
      next: (res) => {console.log(res)
      this.responses=res;
      for ( let i=0;i<this.responses.length;i++){
        if( this.responses[i].uri!=null){
this.response.push(this.responses[i]);

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
