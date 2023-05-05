import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Modal from 'bootstrap/js/dist/modal';
import { FileDetails } from '../FileDetails';
import { Act } from '../actualites-admin/act';
import { FileUploadService } from '../services/file-upload.service';
import { StorageService } from '../services/storage.service';
import { documentsModel } from './documents';

import { DownloadService } from '../services/downloadservice.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  myModal:any
  file!: File;
  fileDetails!: FileDetails;
  fileUris: Array<string> = [];
  blob: any;
doc:documentsModel=new documentsModel()
response:any
  filename:any=""
token=this.storage.getToken();
baseURL:String="http://localhost:9090"
header=new HttpHeaders()
 .set("authorization","Bearer "+this.token);
constructor(private storage:StorageService,private http:HttpClient,private ss:DownloadService,private fileUploadService: FileUploadService, private router: Router) { }
  ngOnInit(): void {
    var element = document.getElementById('threadModal') as HTMLElement;
 this.myModal = new Modal(element);
 this.getDoc()
 
  }
  openModal(){
    this.myModal.show();
  }
  
  
  onCloseHandled(){
    this.myModal.hide();
  
  }
getDocuments(){

  this.filename=this.getFilename(this.file)
  if (this.filename==null){
   return alert( "Le ficher doit etre pdf ou jpg ou jpeg ou png ou xls ou csv")
  }
  else {
    this.uploadFile()
    this.doc.name=this.filename;
    this.doc.uri=this.getFileUri()
    let data=JSON.parse( JSON.stringify(this.doc));
    return this.http.post(this.baseURL+"/newdoc",data,{headers:this.header})
  .subscribe({
    next: (res) => {this.response=res,console.log(res)
      this.reloadPage()},
  error: (err) => {console.log(err)},
  complete: () => {console.log("")}
  
  });
  }
  

}
reloadPage() {
  window.location.reload();
}
selectFile(event: any) {
  this.file = event.target.files.item(0);
}
 getFileUri(){
 
return this.doc.uri="http://localhost:9090/image/"+this.filename;

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
    let filename=file.name
    let extension =filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
    if (extension=="pdf"||extension=="xls"||extension=="csv"||extension=="jpeg"||extension=="jpg"||extension=="png"){
      return filename.substring(0,filename.lastIndexOf('.')-1)+this.getWord()+'.'+extension;
    }
    else {
      return null;
    }
    
 
  
  }

  getDoc(){
    return this.http.get(this.baseURL+"/getdoc",{headers:this.header})
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
