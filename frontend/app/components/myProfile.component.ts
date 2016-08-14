import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'my-profile',
  templateUrl: 'app/components/myProfile.component.html'
})
export class MyProfileComponent {
  genders = ['Male', 'Female'];
  user: User;

  constructor(userService: UserService) {
    this.user=userService.fingUserByEmail();
  }
}
