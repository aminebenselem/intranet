import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
step:any=1;
travail:any=4;
sociale:any;
conge:any;
selectedDemande:string='';
demandes:any=[
  'Attestation de travail',
  'Demande sociale',
  'Demande de congé'
];
  constructor() { }

  ngOnInit(): void {

  }
next(){
  this.step +=1;
  if(this.step==2){
  let  step1=document.getElementById("step1");
  step1?.classList.add("completed")
  }
  if(this.step==3){
    let  step2=document.getElementById("step2");
    step2?.classList.add("completed")
    }
    
}

confirmer(){
    let  step3=document.getElementById("step3");
    step3?.classList.add("completed")
    
}
changeHandler(event:any){
  this.selectedDemande=event.target.value;
  console.log(this.selectedDemande)

}

}
