import { Component } from '@angular/core';
import {HomeComponent} from './components/home.component';

@Component({
    selector: 'my-app',
    directives: [HomeComponent],
    template: `
      <home></home>
    `
})
export class AppComponent {
}
