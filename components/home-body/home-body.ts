import { Component } from '@angular/core';
import {Card} from '../card/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-home-body',
  imports: [
    Card,
    MatIcon
  ],
  templateUrl: './home-body.html',
  styleUrl: './home-body.css'
})
export class HomeBody {
  gap: "sm" | "md" | "lg" = "md";

}
