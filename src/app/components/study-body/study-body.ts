import { Component } from '@angular/core';
import {Card} from '../card/card';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-study-body',
  imports: [
    Card,
    MatIcon,
    RouterLink
  ],
  templateUrl: './study-body.html',
  styleUrl: './study-body.css'
})
export class StudyBody {
  gap: "sm" | "md" | "lg" = "md";
}
