import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodeToken: any = new BehaviorSubject(null);
  constructor(public _HttpClient: HttpClient) {

    if (localStorage.getItem('userToken') != null) {
      this.saveToken();
    }
  }

  register(registerData: any): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", registerData);
  }
  login(loginData: any): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", loginData);
  }

  saveToken() {
    this.decodeToken.next(jwt_decode(JSON.stringify(localStorage.getItem('userToken'))));
    console.log(this.decodeToken.getValue());
  }
}
