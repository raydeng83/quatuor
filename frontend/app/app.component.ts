import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar.component';
import './rxjs-operators';


@Component({
    selector: 'my-app',
    directives: [NavbarComponent],
    templateUrl: 'app/app.component.html'


})
export class AppComponent {
}
