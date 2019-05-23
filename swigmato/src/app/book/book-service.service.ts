import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }
  getDropDownData():Observable<any>{
    // return this.http.get('.././assets/data/dropDownData.json');    
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
   
  let url = "http://localhost:8080/book/getBookdata";
    let body = { }
      let r= this.http.post(url,body, httpOptions)
      return r;
}}
