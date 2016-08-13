import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {User} from "../models/user";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private registerUserUrl = 'http://127.0.0.1:8080/user/register';

  constructor(private http:Http) {
  }

  registerUser(user:User) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.registerUserUrl, JSON.stringify(user), {headers: headers}).toPromise().then(() => user).catch(this.handleError);
  }

  private handleError(error:any) {
    console.error('An error occured', error);

  }
}
