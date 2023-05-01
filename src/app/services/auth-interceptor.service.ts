import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
constructor(private storage:StorageService){}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
  const NewRequest= req.clone({ headers: req.headers.set("authorization", "Bearer "+this.storage.getToken()) });
  return next.handle(NewRequest)
}
}