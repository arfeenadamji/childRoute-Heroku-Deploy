import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;  firebaseErrorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    // this._authService.login1()
    // .subscribe(data =>{
    //   console.log('data ', data[1]);
    // })
    this.loginForm = this.formBuilder.group({
      // email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  login() {
    this._authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then((result) => {
        console.log('res',result)
        if (result) {
          console.log('User authenticated',result);
          this.router.navigate(['/create']);
        } else  {
          console.log("User is not Authentic");
        }
      });
  }
}
