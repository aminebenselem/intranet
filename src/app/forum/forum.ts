import { LoginComponent } from "../login/login.component";
import { User } from "../login/user"

export class Forum{
    id:any;
    title?:String
    body?:String
    user:User=new User()
    replicount:any
}