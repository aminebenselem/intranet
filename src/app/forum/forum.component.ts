import { Component, Directive, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
 


export class ForumComponent implements OnInit {
myModal:any

  constructor() { }

  ngOnInit(): void {
var element = document.getElementById('threadModal') as HTMLElement;
 this.myModal = new Modal(element);
  }
openModal(){
  this.myModal.show();
}


onCloseHandled(){
  this.myModal.hide();

}
}
