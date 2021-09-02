import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthData, USER, _login } from './auth-data.model';
 
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private newUrl = environment.apiUrl + "/c-auth/user";
  private nurl='https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  login(name:any, pass:any): Observable<_login>{
    return this.http.get<_login>(this.nurl);
  }
login1(): Observable<_login>{
  // const authData: AuthData = { username, password, ...(newPassword) && { newPassword } };
  const URL = this.newUrl + "/c-auth/user/login"
  // const URL = `${this.newUrl}/$c-auth/$user/$login`;
  return this.http.get<_login>(URL);
}

login12(username:string, password:string, newPassword?){
  const authData: AuthData = {username, password, ...(newPassword) && {newPassword}};
  return this.http.post<{response: {sessionToken: string, expiresIn: number; userData:USER, accessToken: string }}>
( this.newUrl + "login", authData)
}

}