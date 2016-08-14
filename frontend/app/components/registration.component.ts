import {Component} from '@angular/core';
import {User} from '../models/user';
import {UserService} from "../services/user.service";

@Component({
  selector: 'registration',
  templateUrl: 'app/components/registration.component.html'
})
export class RegistrationComponent {
  user: User = new User();
  usernameExist:boolean = false;
  emailExist:boolean = false;

  constructor(private userService:UserService) {
  }

  onSubmit() {
    this.userService.registerUser(this.user);
  }

  checkUsername() {
    this.usernameExist = false;
    this.userService.findByUsername(this.user).subscribe(
      user => {
        if (user.username != null) {
          this.usernameExist = true;
        }
      },
      error => console.log(error)
    );
  }

  checkEmail() {
    this.emailExist = false;
    this.userService.findByEmail(this.user).subscribe(
      user => {
        if (user.email != null) {
          this.emailExist = true;
        }
      },
      error => console.log(error)
    );
  }
}
