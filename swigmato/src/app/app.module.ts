import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

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
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { CarouselModule } from 'ngx-carousels';

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
    AngularMultiSelectModule,
    AngularDateTimePickerModule,
    CarouselModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
