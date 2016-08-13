import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';
import {RegistrationComponent} from "./components/registration.component";
import {NavbarComponent} from "./components/navbar.component";
import {HomeComponent} from "./components/home.component";
import {UserService} from "./services/user.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeComponent
  ],
  providers:[UserService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
