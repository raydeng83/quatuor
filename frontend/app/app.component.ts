import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar.component';


@Component({
    selector: 'my-app',
    directives: [NavbarComponent],
    templateUrl: 'app/app.component.html'


})
export class AppComponent {
}
