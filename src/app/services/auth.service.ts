import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    return this.http.get(environment.baseUrl + "token/allusers");
  }
  
  public forgotPassword(obj:any):Observable<any>{
       console.log(obj)
    return this.http.post(environment.baseUrl+"token/forgotpassword",obj);
  }
}
