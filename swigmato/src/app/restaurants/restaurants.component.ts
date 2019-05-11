import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  itemImageUrl: string;
  constructor() { }

  ngOnInit() {
    this.itemImageUrl = '../assets/images/1.jpg'
  }

}
