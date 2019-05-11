import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  swigmatoHelper:string;
  constructor() { }

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

// setInterval (() => {
//   console.log("Hello from setInterval");
// }, 500)

}
