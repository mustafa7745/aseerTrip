import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { GuideInfoComponent } from './guide-info/guide-info.component';
import { HomeComponent } from './home/home.component';
import { TransportationComponent } from './transportation/transportation.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    // path: 'main',
    path: '',

    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'guide-info', component: GuideInfoComponent },
      { path: 'transport-info', component: TransportationComponent },

    ],
  },
  { path: 'update-password', component: UpdatePasswordComponent },
];
