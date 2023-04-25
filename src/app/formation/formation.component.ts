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
  backup:any=[]
  searched:any=[]
  selected:any="Tous les categories"
  formations:any=[]
  selectedA:any="Tous les années"
   constructor(private http:HttpClient,private storage:StorageService,private ss:DownloadService) { }
  ngOnInit(): void {
    this.getFormation()
    
    }
  getFormation(){
    return this.http.get(this.baseURL+"/getallformation",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.response=res;
       this.backup=this.response
     
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
  Select(event:any){
   
    this.response=this.backup
    this.searched=[]
  
    this.response.forEach((formation: formation)  => {
    
      if(formation.categorie?.toLocaleLowerCase()==this.selected.toLocaleLowerCase()){
        console.log(formation)
        this.searched.push(formation)
   
      }
    });
  this.response=this.searched
  if(this.selected=="Tous les categories"){
    this.response=this.backup
  }
  }
  SelectA(event:any){
   
    this.response=this.backup
    this.searched=[]
  
    this.response.forEach((formation: formation)  => {
     
   let a= formation.datedb?.toString()
      if(a?.substring(0,4)==this.selectedA){
        this.searched.push(formation)
   
      }
    });
  this.response=this.searched
 if(this.selectedA=="Tous les années"){
  this.response=this.backup
 }
  }
}
