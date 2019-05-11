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
    this.spinnerToogle=false;    
this.modalHeader="FEEDBACK"
this.modalContent="Thankyou, Your Feedback has been successfully Submitted";
  }
  luckSpinner(){
    this.spinnerToogle=true;
    this.modalHeader="LUCK SPINNER"
    this.spinner.show();
    this.spinnerHide();
    this.modalContent="";
   
  }

spinnerHide(){
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
}, 60000);}


}