import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  messageError: string = "";
  constructor(public _AuthService: AuthService, public _Router: Router) { }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][0-9]+$/)]),
  });

  login(loginData: FormGroup) {
    this._AuthService.login(loginData.value).subscribe((response) => {
      if (response.message == 'success') {
        localStorage.setItem("userToken" ,response.token);
        this._AuthService.saveToken();
        this._Router.navigate(['home']);
      }
      else {
        this.messageError = response.message;
      }
    });
  }
  ngOnInit(): void {
  }



}
