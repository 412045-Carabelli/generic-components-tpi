import { Component } from '@angular/core';
import {Card} from '../card/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-study-body',
  imports: [
    Card,
    MatIcon
  ],
  templateUrl: './study-body.html',
  styleUrl: './study-body.css'
})
export class StudyBody {

}
