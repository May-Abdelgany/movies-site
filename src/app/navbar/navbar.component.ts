import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
    this._AuthService.decodeToken.subscribe(() => {
      if (this._AuthService.decodeToken.getValue() == null) {
        this.isLogin = false;
      }
      else {
        this.isLogin = true;
      }
    })
  }

  logout() {
    localStorage.removeItem("userToken");
    this._AuthService.decodeToken.next(null);
    this._Router.navigate(['login']);
  }


}
