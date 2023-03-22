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

  upload(file: File): Observable<FileDetails> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<FileDetails>(`${this.baseURL}/upload`, formData,{headers:this.header});
  }
}
