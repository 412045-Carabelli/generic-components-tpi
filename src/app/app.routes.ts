import { Routes } from '@angular/router';
import {HomeBody} from './components/home-body/home-body';
import {AppointmentsBody} from './components/appointments-body/appointments-body';

export const routes: Routes = [
  { path: 'home', component: HomeBody },
  { path: 'appointments', component:AppointmentsBody},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
