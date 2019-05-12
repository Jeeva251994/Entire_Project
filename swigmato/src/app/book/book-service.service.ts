import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }
  getDropDownData():Observable<any>{
    return this.http.get('.././assets/data/dropDownData.json');    
  }
}
