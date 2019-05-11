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
{name:"zaitoon",location:"velachery",image:"../assets/images/1.jpg"}
    ]
  }

}
