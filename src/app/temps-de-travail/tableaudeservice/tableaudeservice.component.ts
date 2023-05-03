import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { equal } from 'assert';
import { DownloadService } from 'src/app/services/downloadservice.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tableaudeservice',
  templateUrl: './tableaudeservice.component.html',
  styleUrls: ['./tableaudeservice.component.css']
})
export class TableaudeserviceComponent implements OnInit {
  response?:any;
  fevrier?:any;
  Mars?:any;
  Avril?:any;
  Mai?:any;
  Juin?:any;
  Juillet?:any;
  Aout?:any;
  Septembre?:any;
  Octobre?:any;
  Novembre?:any;
  Decembre?:any;
  daysimpl:any=[];
    a:any;
    janvierDays :any= [];
    token=this.storage.getToken();
    baseURL:String="http://localhost:9090"
    backup:any=[]
    janvier:any=[]
    header=new HttpHeaders()
       .set("authorization","Bearer "+this.token)
       header1=new HttpHeaders()
       .set("authorization","Bearer "+this.token)
       .set("Content-Type","image/jpg");
  
    constructor(private http:HttpClient,private storage:StorageService,private ss:DownloadService) { }

  ngOnInit(): void {
    this.getTableau()

  }
  getTableau(){
    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.response=res;
       this.backup=this.response
     this.getJanvier();
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  getJanvier() {
    console.log(this.backup)
    this.janvierDays.length = 0;
    for (let i=0;i<this.backup.length;i++){
      if (this.backup[i].months==1){
  

  this.janvierDays.push(this.backup[i])

}
}

      
console.log(this.janvierDays)
  

  }


  getTableauFevrier(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.fevrier=res;
      
       this.backup=this.fevrier
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==2){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  getTableauMars(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Mars=res;
      
       this.backup=this.Mars
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==3){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  getTableauAvril(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Avril=res;
      
       this.backup=this.Avril
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==4){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }

  getTableauMai(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Mai=res;
      
       this.backup=this.Mai
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==5){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  getTableauJuin(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Juin=res;
      
       this.backup=this.Juin
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==6){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }

  getTableauJuillet(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Juillet=res;
      
       this.backup=this.Juillet
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==7){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }

  getTableauAout(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Aout=res;
      
       this.backup=this.Aout
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==8){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }

  getTableauSeptembre(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Septembre=res;
      
       this.backup=this.Septembre
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==9){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }

  getTableauOctobre(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Octobre=res;
      
       this.backup=this.Octobre
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==10){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }

  getTableauNovembre(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Novembre=res;
      
       this.backup=this.Novembre
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==11){
    
  
    this.janvierDays.push(this.backup[i])
  
  }
  }
        
        
      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
  getTableauDecembre(){
    this.janvierDays.length = 0;
    this.backup.length = 0;

    return this.http.get(this.baseURL+"/tableau/service",{headers:this.header})
    .subscribe({
      next: (res) => {
       this.Decembre=res;
       
    
       this.backup=this.Decembre
       console.log(this.backup)
       for (let i=0;i<this.backup.length;i++){
        if (this.backup[i].months==12){
        
  
    this.janvierDays.push(this.backup[i])
  
  }
  }

  

 

  console.log(this.janvierDays);
  
 
 
       
  
  

  

      },
  error: (err) => console.log(err),
  complete: () => console.log("")
  
  });
  }
}
