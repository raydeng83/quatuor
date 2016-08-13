import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./components/registration.component";
import {HomeComponent} from "./components/home.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
