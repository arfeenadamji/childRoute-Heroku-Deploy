import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';
import {_login } from './auth-data.model';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
 
@Injectable({
  providedIn: 'root'
})

export class AuthService {
user:User;
  constructor(public afAuth:AngularFireAuth, public router:Router) { 
    this.afAuth.authState.subscribe(user =>{
     if(user){
       this.user = user;
       localStorage.setItem('user', JSON.stringify(this.user));
     }else{
       localStorage.setItem('user', null);
     }
    })
}

  async  email(email:string, password:string){
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email,password)
      this.router.navigate(['admin/list']);
    }

    async  register(email:string, password:string){
      var result = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
        this.sendEmailVerification();
      }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['admin/verify-email']);
  }
  
  async sendPasswordResetEmail(sendPasswordResetEmail: string){
    return await this.afAuth.auth.sendPasswordResetEmail(sendPasswordResetEmail);
  }

  async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return user != null;
  }

  async loginWithGoogle(){
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['admin/list']);
  }


}












// import { HttpClient } from '@angular/common/http';
// import { stringify } from '@angular/compiler/src/util';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { AuthData, USER, _login } from './auth-data.model';
 
// @Injectable({
//   providedIn: 'root'
// })

// export class AuthService {
//   private newUrl='https://jsonplaceholder.typicode.com/todos';

//   private nurl='https://jsonplaceholder.typicode.com/todos';
//   constructor(private http: HttpClient) { }

//   login(name:any, pass:any): Observable<_login>{
//     return this.http.get<_login>(this.nurl);
//   }
// login1(): Observable<_login>{
//   return this.http.get<_login>(this.newUrl);
// }

// login12(username:string, password:string, newPassword?){
//   const authData: AuthData = {username, password, ...(newPassword) && {newPassword}};
//   return this.http.post<{response: {sessionToken: string, expiresIn: number; userData:USER, accessToken: string }}>
// ( this.newUrl + "login", authData)
// }

// }