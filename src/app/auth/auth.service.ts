import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import {_login } from './auth-data.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private newUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient, public afAuth: AngularFireAuth,private router:Router) {}

  login1(): Observable<_login> {
    return this.http.get<_login>(this.newUrl);
  }


  login(email, password): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }
}
