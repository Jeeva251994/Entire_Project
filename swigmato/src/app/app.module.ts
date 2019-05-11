import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service'
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BookComponent } from './book/book.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomeComponent,
    OrderComponent,
    RestaurantsComponent,
    BookComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
