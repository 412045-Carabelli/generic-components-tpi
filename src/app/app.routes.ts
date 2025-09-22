import { Routes } from '@angular/router';
import {HomeBody} from './components/home-body/home-body';
import {MobileBaseStructure} from './components/mobile-base-structure/mobile-base-structure';
import {StudyBody} from './components/study-body/study-body';

export const routes: Routes = [
  {path: '', component: HomeBody},
  { path: 'home', component: HomeBody },
  { path: 'study', component: StudyBody}
];
