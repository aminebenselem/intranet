import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../services/file-upload.service';
import { StorageService } from '../services/storage.service';
import { DownloadService } from '../services/downloadservice.service';
import { fichedepaie } from './fichedepaie';
import { demande } from './demande';
import { FileDetails } from '../FileDetails';

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
 'fiche de paie',
  'Attestation de travail',
  'Demande sociale',
  
];
filename:string=""
file!: File;
fileDetails!: FileDetails;
fileUris: Array<string> = [];
filenameb:string=""
fileb: FileList|[]=[];
fileDetailsb!: FileDetails;
fileUrisb: Array<string> = [];
socials:any=[
  'demande avance sur salaire',
  'demande prime de déces',
  'demande prime de mariage',
 'demande convention Ooredoo',
];
social1:string='';
fichedepaie:fichedepaie=new fichedepaie()
demande:demande=new demande()
token=this.storage.getToken();
baseURL:String="http://localhost:9090/fichedepaie"
baseurl:String="http://localhost:9090"
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
  this.download(this.baseurl+"/attestation","attestation.pdf")

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



postFiche(){

this.fichedepaie.user.mat_Pers=this.storage.getUser();
  let data=JSON.parse( JSON.stringify(this.fichedepaie));
  console.log(data)

  return this.http.post(this.baseURL+"/newfiche",data,{headers:this.header})
.subscribe({
  next: (res) => {this.response=res,console.log(res)},
error: (err) => {console.log(err)},
complete: () => console.log("")

});
}
postDemande(){
  this.demande.user.mat_Pers=this.storage.getUser();
  this.demande.type=this.social1
  this.demande.proved="en cours"
  this.filename=this.getFilename(this.file)
  this.uploadFile()
  this.demande.uri=this.getFileUri()

let data=JSON.parse( JSON.stringify(this.demande));

console.log(data)
return this.http.post(this.baseurl+"/newdemande",data,{headers:this.header})
.subscribe({
  next: (res) => {this.response=res,console.log(res)},
error: (err) => {console.log(err)},
complete: () => console.log("")

});
}


reloadPage() {
  window.location.reload();
}
selectFile(event: any) {
  this.file = event.target.files.item(0);
  console.log(this.file)
  
}
 getFileUri(){
 
  return this.demande.uri="http://localhost:9090/image/"+this.filename;
}
uploadFile() {
  this.fileUploadService.upload(this.file,this.filename,"/upload").subscribe({
    next: (data) => {
      {this.fileDetails = data,console.log(data)};
      this.fileUris.push(this.fileDetails.fileUri);
      alert("File Uploaded Successfully")
    },
    error: (e) => {
      console.log(e);
    }
  });
}

  

  getWord(minLength: number = 4, maxLength: number = 10):any {
    return Math.trunc(Math.random() * (100000));
  
  }
  getFilename(file: File){
    let filename='';
     filename=file.name
    let extension =filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
    return filename.substring(0,filename.lastIndexOf('.')-1)+this.getWord()+'.'+extension;
   

  }
  getFileUrib(filename:any){
 
    return "http://localhost:9090/image/"+filename;
    
    }
  postDemandeb(){
    console.log(this.fileb[0])
    console.log(this.fileb[1])

    this.demande.user.mat_Pers=this.storage.getUser();
  this.demande.type=this.social1
  this.demande.proved="en attente"
  
  this.filename=this.fileb[0]?.name
  let extension =this.filename.substring(this.filename.lastIndexOf('.')+1, this.filename.length) || this.filename;
  this.filename=this.filename.substring(0,this.filename.lastIndexOf('.')-1)+this.getWord()+'.'+extension;
  this.filenameb=this.fileb[1]?.name
  let extension1 =this.filenameb.substring(this.filenameb.lastIndexOf('.')+1, this.filenameb.length) || this.filenameb;
  this.filenameb=this.filenameb.substring(0,this.filenameb.lastIndexOf('.')-1)+this.getWord()+'.'+extension1;
  this.demande.uri=this.getFileUrib(this.filename)
  this.demande.uri1=this.getFileUrib(this.filenameb);

let data=JSON.parse( JSON.stringify(this.demande));
console.log(data)
this.uploadFileb(this.fileb[0],this.filename)
this.uploadFileb(this.fileb[1],this.filenameb)

return this.http.post(this.baseurl+"/newdemande",data,{headers:this.header})
.subscribe({
  next: (res) => {this.response=res,console.log(res)},
error: (err) => {console.log(err)},
complete: () => console.log("")

});
}
uploadFileb(file:File,filename:any) {
  this.fileUploadService.upload(file,filename,"/upload").subscribe({
    next: (data) => {
      {this.fileDetails = data,console.log(data)};
      this.fileUris.push(this.fileDetails.fileUri);
      alert("File Uploaded Successfully")
    },
    error: (e) => {
      console.log(e);
    }
  });
}


 
  selectFileb(event1: any) {
    this.fileb=event1.target.files
    console.log(this.fileb)

  }
  
}
