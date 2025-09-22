import { Routes } from '@angular/router';
import {HomeBody} from './components/home-body/home-body';
import {StudyBody} from './components/study-body/study-body';

export const routes: Routes = [
  { path: 'home', component: HomeBody },
  { path: 'study', component: StudyBody}
];
