import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../services/file-upload.service';
import { StorageService } from '../services/storage.service';
import { DownloadService } from '../services/downloadservice.service';
import { error } from 'console';
import { map } from 'rxjs';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  blob:any
step:any=1;
response:any
selectedDemande:string='';
demandes:any=[
  'Attestation de travail',
  'Demande sociale',
  'Demande de congé'
];
socials:any=[
  'demande avance sur salaire',
  'demande prime de déces',
  'demande prime de mariage',
 'demande convention Ooredoo',
];
social1:String='';
token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
   .set("authorization","Bearer "+this.token);
  constructor(private ss:DownloadService,private http:HttpClient,private storage:StorageService,private route:Router,private fileUploadService: FileUploadService) { }


  ngOnInit(): void {
   
  }

next(){
  this.step +=1;
  if(this.step==2){
  let  step1=document.getElementById("step1");
  step1?.classList.add("completed")
  }
  if(this.step==3){
    let  step2=document.getElementById("step2");
    step2?.classList.add("completed")
    }
    
}

confirmer(){
    let  step3=document.getElementById("step3");
    step3?.classList.add("completed")
    
}
changeHandler(event:any){
  this.selectedDemande=event.target.value;
  console.log(this.selectedDemande)

}
changeHandler2(event:any){
  this.social1=event.target.value;
  console.log(this.social1)

}
getAttestation(){
  this.download(this.baseURL+"/attestation","attestation.pdf")

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
}
