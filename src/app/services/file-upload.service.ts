import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDetails } from '../FileDetails';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  token=this.storage.getToken();
  baseURL:String="http://localhost:9090"
  header=new HttpHeaders()
     .set("authorization","Bearer "+this.token);
  constructor(private httpClient: HttpClient,private storage:StorageService) { }

  upload(file: File,filename:string,url:string): Observable<FileDetails> {

    const formData: FormData = new FormData();
    formData.append('file', file,filename);
    return this.httpClient.post<FileDetails>(this.baseURL+url, formData,{headers:this.header});
  }
 
}
