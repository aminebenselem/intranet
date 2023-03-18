import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { LoginUserService } from '../services/login-user.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user :User =new User()
 private response:any="";
private isloggedin:boolean=false
constructor(private LoginUser:LoginUserService,private router:Router,private storage:StorageService){

}
  ngOnInit() {

}
onSubmit(){
  let data=JSON.parse( JSON.stringify(this.user));
  
   this.LoginUser.login(data).subscribe({
    next:(res) => {
    this.isloggedin=true,this.response=res;
    if(this.isloggedin){this.storage.storeToken(this.response.token);this.storage.storeuser(this.user.Mat_Pers);
    this.router.navigate(['/acceuil'])
    }
    },
error: (err) => console.log(err),
complete: () => {console.log('completed')}

});

}


  }
  
