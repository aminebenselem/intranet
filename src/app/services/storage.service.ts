import * as CryptoJS from 'crypto-js';

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
   EncryptKey = "1203199320052021"
   EncryptIV = "1203199320052021"

  private key = CryptoJS.enc.Utf8.parse(this.EncryptKey);
  private iv = CryptoJS.enc.Utf8.parse(this.EncryptIV);
  constructor() {}
  // Methods for the encrypt and decrypt Using AES
 private  encrypt(text: string): any {
      var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(text), this.key, {
          keySize: 128 / 8,
          iv: this.iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();
  }
  private decrypt(decString: string) {
      var decrypted = CryptoJS.AES.decrypt(decString, this.key, {
          keySize: 128 / 8,
          iv: this.iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
  }
   storeToken(token:string){
  localStorage.setItem('token',this.encrypt(token))
  }
  getToken(){
    
    let token =localStorage.getItem('token')+""
    
    return this.decrypt(token);
  }
  storeuser(username:any){
    localStorage.setItem('user',this.encrypt(username))
  }
  storeUserRole(role:any){
    localStorage.setItem('role',this.encrypt(role))
  }
  getUserRole(){
    let role =localStorage.getItem('role')+""
    
    return this.decrypt(role);
  }
  getUser(){
    let user =localStorage.getItem('user')+""
    
    return this.decrypt(user);
  }
}


