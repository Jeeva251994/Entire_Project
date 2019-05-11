import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  swigmatoHelper:string;
  modalHeader:string="";
  modalContent:string="";
  spinnerToogle:boolean;
  count:number = 0;
   initTime = new Date();
   i = 0;
   timeRemaining:any;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.swigmatoHelper="UnExpected Guests?";
    this.swigmatoHelperCalling();  
   
 
  }

  swigmatoHelperCalling(){
    let content=[];
    content=["Game time?","UnExpected Guests?","Cooking went Wrong?","So tired to cook?"]
    let i=0;
    setInterval(()=>{ 
    this.swigmatoHelper = content[i];
    i++;
    if(i == content.length){i=0;}
}, 2000);
  }
  feedback(){
   this.spinnerToogle=false
this.modalHeader="FEEDBACK"
this.modalContent="Thankyou, Your Feedback has been successfully Submitted";
  }
  luckSpinner(){
    this.spinnerToogle=true
    this.modalHeader="LUCK SPINNER"
    this.spinner.show();
    this.spinnerHide();
    this.modalContent=""
  }

 myTimer(){
  
    this.i++;
    var newTime = new Date(this.initTime.getTime() - this.i * 1000);
    this.timeRemaining = newTime.toLocaleTimeString();
    this.timeRemaining=this.timeRemaining.slice(0, 8)+" hrs";
    if(this.spinnerToogle){
    this.modalContent="Maximum Limit reached! Try after "+this.timeRemaining;
    }
   
    setTimeout(() => {
      this.myTimer();
  }, 1000);
    }
   
spinnerHide(){
  setTimeout(() => {
    this.spinner.hide();
    if(this.count == 0){
    this.modalContent="Congrats!! Use Code 'LUCKY' to get 20% instant cashback!"; this.count++;
  }
    else{
      
      this.myTimer();
 
    }
}, 1000);}


}