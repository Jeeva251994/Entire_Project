import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { BookComponent } from './book/book.component';

import { from } from 'rxjs';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'book', component: BookComponent },
  { path: 'restaurants', component: RestaurantsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
