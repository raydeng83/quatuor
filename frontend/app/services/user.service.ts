import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {User} from "../models/user";



@Injectable()
export class UserService {

  private registerUserUrl = 'http://127.0.0.1:8080/user/register';
  private checkUsernameUrl = 'http://127.0.0.1:8080/user/username';
  private checkEmailUrl = 'http://127.0.0.1:8080/user/email';

  constructor(private http:Http) {
  }

  //register a user
  registerUser(user:User) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.registerUserUrl, JSON.stringify(user), {headers: headers}).map(this.extractData);
  }

  checkUsername(user:User) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.checkUsernameUrl, user.username, {headers: headers})
      .map(this.extractData);
  }

  checkEmail(user:User) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.checkEmailUrl, user.email, {headers: headers})
      .map(this.extractData);
  }


  private extractData(res) {
    return res.json();
  }


}
