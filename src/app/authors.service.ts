import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {  Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) {
    
   }
   getObjects(): Observable<any>{
    return this.http.get("https://5f047cf58b06d60016ddeb9a.mockapi.io/api/authors");
  }
 
  getSpecificObject(data: string): Observable<any>{
    return this.http.get("https://5f047cf58b06d60016ddeb9a.mockapi.io/api/authors"+data);
  }

}
