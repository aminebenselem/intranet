import { User } from "../login/user"

export class Forum{
    title?:String
    body?:String
    user:User=new User()
}