import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { 
    
  }
  
  // loginCheck(a, b): Observable<any> {
    loginCheck (usname,pwd):any {
    
    
        const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
     
    let url = "http://localhost:8080/hello/hello";
      let body = {
        username: usname,
        pwd: pwd
      }
      console.log(body)
      if (usname != undefined && usname !="" && pwd != undefined && pwd != "") {
        // return this.http.post<any>(url,body, httpOptions).pipe()
        return true;
      }
      else { 
        return false;
      }
  }



}


