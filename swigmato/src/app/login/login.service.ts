import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:any;
  constructor(private http: HttpClient) { 
    
  }
  
  //// loginCheck(a, b): Observable<any> {
    loginCheck (usname,pwd):boolean {
    
    
        const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
     
    let url = "http://localhost:8080/login/loginCheck";
      let body = {
        "username": usname,
        "pwd": pwd
      }
      let a;
      a = false;
      if (usname != undefined && usname !="" && pwd != undefined && pwd != "" && usname=="admin" && pwd  == "admin") {
        // let a = this.http.post(url,body, httpOptions)
        // if(a.username ! = "Login Not Successfull ")
       a = true;
        return a;
      }
    
  }



}


