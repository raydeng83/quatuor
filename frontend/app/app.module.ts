import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
import {RegistrationComponent} from "./components/registration.component";
import {NavbarComponent} from "./components/navbar.component";
import {HomeComponent} from "./components/home.component";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
