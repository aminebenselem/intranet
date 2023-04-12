import { User } from "../login/user";

export class Reclamation{
    id:any
    email?:String;
    subject?:String;
    message?:String;
    departement?:String;
    user:User=new User();
    replycount:any

}