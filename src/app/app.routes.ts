import { Routes } from '@angular/router';
import {HomeBody} from './components/home-body/home-body';
import {MobileBaseStructure} from './components/mobile-base-structure/mobile-base-structure';
import {StudyBody} from './components/study-body/study-body';
import {FamilyBody} from './components/family-body/family-body';
import {AppointmentsBody} from './components/appointments-body/appointments-body';

export const routes: Routes = [
  {path: '', component: HomeBody},
  { path: 'home', component: HomeBody },
  { path: 'study', component: StudyBody},
  { path: 'family', component: FamilyBody},
  { path: 'appointments', component:AppointmentsBody}
];
