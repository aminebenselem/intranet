import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from '../services/downloadservice.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-etatdemande',
  templateUrl: './etatdemande.component.html',
  styleUrls: ['./etatdemande.component.css']
})
export class EtatdemandeComponent implements OnInit {

  response?:any=[];
  responses?:any;
 token=this.storage.getToken();
 baseURL:String="http://localhost:9090"
 header=new HttpHeaders()
    .set("authorization","Bearer "+this.token);
 

constructor(private http:HttpClient,private storage:StorageService,private route:Router,private ss:DownloadService) { }
  ngOnInit(): void {
  this.getDemandes();
}
reloadPage() {
  window.location.reload();
}
getDemandes(){
  return this.http.get(this.baseURL+"/getdemandebyuser",{headers:this.header})
  .subscribe({
    next: (res) => {this.response=res
      console.log(this.response)
     
   
      
    },
error: (err) => console.log(err),
complete: () => console.log("")

});

}

}
