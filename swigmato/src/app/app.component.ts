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
  signUp:boolean;
  constructor(private loginService:LoginService, private _router: Router) { }


  ngOnInit() {
  this._router.navigate(['/restaurants']);
  this.openModal.nativeElement.click();
  this.signUp=false;
    // this.loginCheck = true;
}

  login() {
    let loginSuccess = this.loginService.loginCheck(this.username, this.password)
       .subscribe((data) => console.log(data));;
    // if (loginSuccess) {
      if (true) {
      this.openModal.nativeElement.click();
      this.loginCheck =true;
      this._router.navigate(['/home']);
    }
    else {
      this.errorMsg = true;
      this.onResetAll();
    }
  }
  onResetAll(mainReset?: boolean) { 
    if (mainReset) {this.errorMsg = false; }
    else{this.signUp=true;}
    this.username = '';
    this.password = '';
  }
  onSignUp(username,pwd){
  localStorage.setItem("sUsername",username);
  localStorage.setItem("spassword",pwd);
  }  
  
  
}
