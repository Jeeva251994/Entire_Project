import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './login/login.service'
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('openModal') openModal: ElementRef;
  username: string;
  password: string;
  loginCheck: boolean;
  errorMsg: boolean;
  constructor(private loginService:LoginService, private _router: Router) { }


  ngOnInit() {
    this._router.navigate(['/']);
  this.openModal.nativeElement.click();
}

  login() {
    this.loginCheck = this.loginService.loginCheck(this.username, this.password)
      // .subscribe(() => console.log("sd"));;
    if (this.loginCheck) {
      this.openModal.nativeElement.click();
      this._router.navigate(['/landing']);
    }
    else {
      this.errorMsg = true;
      this.onResetAll();
    }
  }
  onResetAll(mainReset?: boolean) { 
    if (mainReset) {this.errorMsg = false; }
    this.username = '';
    this.password = '';
  }
  
  
  
}
