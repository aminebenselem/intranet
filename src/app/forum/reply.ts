import { User } from "../login/user";
import { Forum } from "./forum";

export class Reply{
 forum:Forum=new Forum();
 body?:string;
 user:User=new User();
}