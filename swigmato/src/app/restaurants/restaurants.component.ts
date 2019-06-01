import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  itemImageUrl: string;
  rstDetailsRes:any[]=[];
  rstDetails:any[]=[];
  @ViewChild('Scroll') Scrolling: ElementRef;
  constructor() { }

   scrollWin(position) {
     if(position=="down"){this.Scrolling.nativeElement.scrollTop += 300;}
     else {this.Scrolling.nativeElement.scrollTop -= 300;}
  }


  ngOnInit() {
    this.itemImageUrl = '../assets/images/1.jpg'
    this.rstDetailsRes=[
{name:"Annalaya",image:"Annalaya", location:"velachery",rating:"2",off:60},
{name:"Aseef",image:"Aseef", location:"Adambakkam",rating:"2.5",off:40},
{name:"Barbeque Nation",image:"Barbeque_Nation", location:"Adambakkam",rating:"5",off:50},
{name:"Bhuhari",image:"Bhuhari", location:"Adambakkam",rating:"4",off:20},
{name:"Briyani_House",image:"Briyani_House", location:"Adambakkam",rating:"3",off:10},
{name:"Dindugal_Thalapakati",image:"Dindugal_Thalapakati", location:"Adambakkam",rating:"3.5",off:30},
{name:"Dosa_Hunt",image:"Dosa_Hunt", location:"Adambakkam",rating:"2",off:20},
{name:"Saravana_Bhavan",image:"Saravana_Bhavan", location:"Adambakkam",rating:"4.5",off:10},
{name:"Seashell",image:"Seashell", location:"Adambakkam",rating:"4",off:30},
{name:"Thambi_Villas",image:"Thambi_Villas", location:"Adambakkam",rating:"3",off:20},
{name:"Thaqwa",image:"Thaqwa", location:"Adambakkam",rating:"2",off:40},
{name:"Zaitoon",image:"Zaitoon", location:"Adambakkam",rating:"4.5",off:20}
    ]
    this.rstDetailsRes.map((item)=>{
      let codeNo = Math.ceil(Math.random()*1000);
      item.code = item.name.slice(0,3)+codeNo+"Swig";
      this.rstDetails.push(item);
    });
  }

}
