import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  itemImageUrl: string;
  rstDetails:any[]=[];
  constructor() { }

  ngOnInit() {
    this.itemImageUrl = '../assets/images/1.jpg'
    this.rstDetails=[
{name:"Annalaya",image:"Annalaya", location:"velachery"},
{name:"Aseef",image:"Aseef", location:"Adambakkam"},
{name:"Barbeque Nation",image:"Barbeque_Nation", location:"Adambakkam"},
{name:"Bhuhari",image:"Bhuhari", location:"Adambakkam"},
{name:"Briyani_House",image:"Briyani_House", location:"Adambakkam"},
{name:"Dindugal_Thalapakati",image:"Dindugal_Thalapakati", location:"Adambakkam"},
{name:"Dosa_Hunt",image:"Dosa_Hunt", location:"Adambakkam"},
{name:"Saravana_Bhavan",image:"Saravana_Bhavan", location:"Adambakkam"},
{name:"Seashell",image:"Seashell", location:"Adambakkam"},
{name:"Thambi_Villas",image:"Thambi_Villas", location:"Adambakkam"},
{name:"Thaqwa",image:"Thaqwa", location:"Adambakkam"},
{name:"Zaitoon",image:"Zaitoon", location:"Adambakkam"}
    ]
  }

}
