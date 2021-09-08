import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  // emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  // loading=false;
  constructor(private authService: AuthService) { }
  
  ngOnInit() {
  
  }
  
  submit() {
    
  }
  login(): void {
    }

}








// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
//   loading=false;
//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private _authService: AuthService
//   ) { }
  
//   ngOnInit() {
//     this._authService.login1()
//     .subscribe(data =>{
//       console.log('data ', data[1]);
//     })
//     this.loginForm = this.formBuilder.group({
//       email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
//       password: [null, Validators.required]
//     });
//   }
  
//   submit() {
//     if (!this.loginForm.valid) {
//       return;
//     }
//     console.log(this.loginForm.value);
//   }
//   login(): void {
//     this.loading = true;
//     let { email, password, rememberMe } = this.loginForm.value;
//     localStorage.setItem('firstloginemail', JSON.stringify(email));
//     if (rememberMe) {
//         localStorage.setItem('email', email);
//         localStorage.setItem('password', password);
//         localStorage.setItem('rememberMe', String(true));
//     } else {
//         localStorage.removeItem('email');
//         localStorage.removeItem('password');
//         localStorage.removeItem('rememberMe');
//     }
//     this._authService.login(email, password)
//         .subscribe(__ => {
//           console.log("__",__)
//             this.loading = false;
//         }, __ => this.loading = false);
// }

// }
