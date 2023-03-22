import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
  fileToUpload: File | null = null;
  actualite:any=[]
  month:any=[
    "Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"

  ]

  
 responses?:any;
 token=this.storage.getToken();
 baseURL:String="http://localhost:9090"
 header=new HttpHeaders()
    .set("authorization","Bearer "+this.token);
constructor(private http:HttpClient,private storage:StorageService) { }

  ngOnInit(): void {
    this.getallactualite();
  }
getallactualite(){
  return this.http.get(this.baseURL+"/actualite",{headers:this.header})
  .subscribe({
    next: (res) => {this.responses=res,console.log(res);
      for(let response of this.responses){
       
        this.actualite.push(response)
      }      
      
    },
error: (err) => console.log(err),
complete: () => console.log("")

});

}
getDay(date:any){
  return parseInt( date.substring(8,10))
}
getMonth(date:any){
return this.month[parseInt(date.substring(5,7))-1]
}
getimage(){
  return this.http.get(this.responses.act.uri,{headers:this.header})
  .subscribe({
    next: (res) => {console.log(res);},
error: (err) => console.log(err),
complete: () => console.log("")

});
}
}
