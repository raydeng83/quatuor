import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./components/registration.component";
import {HomeComponent} from "./components/home.component";
import {MyProfileComponent} from "./components/myProfile.component";


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
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
