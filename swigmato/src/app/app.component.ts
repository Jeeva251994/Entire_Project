import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './login/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('openModal') openModal: ElementRef;
  username: string;
  password: string;

  constructor(private loginService:LoginService) { }


ngOnInit(){
  this.openModal.nativeElement.click();
}
  login() {
    // let a = this.loginService.loginCheck(this.username, this.password);
    this.loginService.loginCheck(this.username, this.password)
      .subscribe(() => console.log("sd"));;
  }
  
  
  
}
