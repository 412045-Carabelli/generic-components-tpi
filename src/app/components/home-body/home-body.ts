import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {Card} from '../card/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-body',
  imports: [
    MatIcon,
    Card,
    RouterLink
  ],
  templateUrl: './home-body.html',
  styleUrl: './home-body.css'
})
export class HomeBody {
  gap: "sm" | "md" | "lg" = "md";

}
