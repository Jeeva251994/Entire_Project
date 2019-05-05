import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { 
    
  }
  

  // loginCheck(usr, pwd): any { 
  //     const httpOptions = {
  //       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //     };
  //     // let url = "http://localhost:8080/loginCheck"
  //   let url = "http://localhost:8080/hello/hello"
  //     let body = {
  //       // username: usr,
  //       // password: pwd
  //     }
  //   return this.http.post<any>(url, body, httpOptions).pipe()
    
    
  // }

  loginCheck (a,b): Observable<any> {
    // return this.http.get<any>("http://localhost:8080/hello/hello")
    //   .pipe(
    //     // catchError(this.handleError<Hero[]>('getHeroes', []))
    //   );
        const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      // let url = "http://localhost:8080/loginCheck"
    let url = "http://localhost:8080/hello/hello";
      let body = {
        username: a,
        pwd: b
      }
    console.log(body)
    return this.http.post<any>(url,body, httpOptions).pipe()
  
  }



}


