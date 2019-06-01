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
{name:"Annalaya",image:"Annalaya", location:"velachery",rating:"2"},
{name:"Aseef",image:"Aseef", location:"Adambakkam",rating:"2.5"},
{name:"Barbeque Nation",image:"Barbeque_Nation", location:"Adambakkam",rating:"5"},
{name:"Bhuhari",image:"Bhuhari", location:"Adambakkam",rating:"4"},
{name:"Briyani_House",image:"Briyani_House", location:"Adambakkam",rating:"3"},
{name:"Dindugal_Thalapakati",image:"Dindugal_Thalapakati", location:"Adambakkam",rating:"3.5"},
{name:"Dosa_Hunt",image:"Dosa_Hunt", location:"Adambakkam",rating:"2"},
{name:"Saravana_Bhavan",image:"Saravana_Bhavan", location:"Adambakkam",rating:"4.5"},
{name:"Seashell",image:"Seashell", location:"Adambakkam",rating:"4"},
{name:"Thambi_Villas",image:"Thambi_Villas", location:"Adambakkam",rating:"3"},
{name:"Thaqwa",image:"Thaqwa", location:"Adambakkam",rating:"2"},
{name:"Zaitoon",image:"Zaitoon", location:"Adambakkam",rating:"4s"}
    ]
  }

}
