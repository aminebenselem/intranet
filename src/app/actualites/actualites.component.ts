import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
  image="http://localhost:9090/image/image19122.jpg"
  fileToUpload: File | null = null;
  actualite:any=[]
  month:any=[
    "Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"

  ]
uri:any=[]

  
 responses?:any;
 token=this.storage.getToken();
 baseURL:String="http://localhost:9090"
 header=new HttpHeaders()
    .set("authorization","Bearer "+this.token);

constructor(private http:HttpClient,private storage:StorageService,private route:Router) { }

  ngOnInit(): void {
    
    if(this.token==''){
      this.route.navigate(["/403"])
    }
    this.getallactualite();
  }
getallactualite(){

  return this.http.get(this.baseURL+"/actualite",{headers:this.header})
  .subscribe({
    next: (res) => {this.responses=res,console.log(res);
      for(let response of this.responses){
        this.actualite.push(response)
this.actualite.reverse();
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
private loadImage(url: string): Observable<any> {
  return this.http
    // load the image as a blob
    .get(url, {responseType: 'blob'})
    // create an object url of that blob that we can use in the src attribute
    .pipe(map((e) => URL.createObjectURL(e)))
}
}

