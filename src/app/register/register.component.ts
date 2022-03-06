import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  messageError: string = "";
  constructor(public _AuthService: AuthService,public _Router: Router) { }

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(7), Validators.minLength(3)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(7), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][0-9]+$/)]),
    age: new FormControl(null, [Validators.required, Validators.max(50), Validators.min(18)]),
  });

  register(registerData: FormGroup) {
    this._AuthService.register(registerData.value).subscribe((response) => {
      if (response.message == 'success') {
        this._Router.navigate(['login']);
      }
      else {
        this.messageError = response.errors.email.message;
      }
    })
  }
  ngOnInit(): void {
  }

}
