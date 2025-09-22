import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-example-content',
  imports: [
    MatCardActions,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatButton
  ],
  templateUrl: './example-content.html',
  styleUrl: './example-content.css'
})
export class ExampleContent {

}
