import {Component} from '@angular/core';
import {User} from '../models/user';
import {UserService} from "../services/user.service";

@Component({
  selector: 'registration',
  templateUrl: 'app/components/registration.component.html'
})
export class RegistrationComponent {
  user = new User();

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.registerUser(this.user);
  }
}
