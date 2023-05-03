import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { StorageService } from '../services/storage.service';
import { FileUploadService } from '../services/file-upload.service';
import { FileDetails } from '../FileDetails';
import { fichedepaie } from '../demandes/fichedepaie';
import { Notification } from '../Notification';
@Component({
  selector: 'app-ficheadmin',
  templateUrl: './ficheadmin.component.html',
  styleUrls: ['./ficheadmin.component.css']
})
export class FicheadminComponent implements OnInit {
  notification:Notification=new Notification()
  myModal: any;
  fichedepaie:fichedepaie=new fichedepaie()
  file!: File;
  fileDetails!: FileDetails;
  fileUris: Array<string> = [];
    filename:string=""
  response: any;
  responses?:any=[];
  token=this.storage.getToken();
  baseURL:String="http://localhost:9090/fichedepaie"
  header=new HttpHeaders()
  .set("authorization","Bearer "+this.token);
constructor(private storage:StorageService,private http:HttpClient,private fileUploadService: FileUploadService, private router: Router) { }

  ngOnInit(): void {
    var element = document.getElementById('threadModal') as HTMLElement;
  this.myModal = new Modal(element);
  this.getFiche();
  }
  openModal(){
    this.myModal.show();
   
  }
  
  
  onCloseHandled(){
    this.myModal.hide();
  }  

 
  

  getFiche(){
    return this.http.get(this.baseURL+"/getallfiche",{headers:this.header})
    .subscribe({
      next: (res) => {console.log(res)
      this.responses=res;},
    error: (err) => console.log(err),
    complete: () => console.log("")
    
    });
  }
  postFiche() {
    this.filename=this.getFilename(this.file)
  
    this.uploadFile()
    this.fichedepaie.uri=this.getFileUri()
    let data=JSON.parse( JSON.stringify(this.fichedepaie));
    return this.http.put(this.baseURL+"/updatefiche",data,{headers:this.header})
  .subscribe({
    next: (res) => {this.response=res,console.log(res),this.notify()},
  error: (err) => {console.log(err)},
  complete: () => {console.log("")}
  
  });
  }


  getId(event:any){
   this.fichedepaie.id=event.target.id;
   this.notification.user.mat_Pers=event.target.name;
   
  }



  
  reloadPage() {
    window.location.reload();
  }
  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }
   getFileUri(){
   
  return this.fichedepaie.uri="http://localhost:9090/image/"+this.filename;
  
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
     return filename.substring(0,filename.lastIndexOf('.')-1)+this.getWord()+'.'+extension;
    
    }
    notify(){
      
      
      this.notification.message="Votre fiche de paie est préte";
      
        let data=JSON.parse( JSON.stringify(this.notification));
        return this.http.post("http://localhost:9090/notify",data,{headers:this.header})
        .subscribe({
          next: (res) => {this.response=res,console.log(res)},
        error: (err) => {console.log(err)},
        complete: () => console.log("")
        
        });
      }
}
