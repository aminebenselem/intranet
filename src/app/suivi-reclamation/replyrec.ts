import { User } from "../login/user";
import { Reclamation } from "../reclamation/reclamtion";

export class ReplyRec{
 reclamation:Reclamation=new Reclamation();
 body?:string;
 user:User=new User();
}