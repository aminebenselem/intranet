import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn: 'root'})
export class DownloadService {
  token=this.storage.getToken();
  header=new HttpHeaders()
  .set("authorization","Bearer "+this.token)
  constructor(private http: HttpClient,private storage:StorageService) {}
 
  download(url: string){
    
    return this.http.get(url, {
      responseType: 'blob' ,headers:this.header
    })
  }
}
export class DownloadserviceService {

  constructor() { }

}
