import { Component } from '@angular/core';
import {Card} from '../card/card';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-body',
  imports: [
    Card,
    MatIcon,
    RouterLink
  ],
  templateUrl: './home-body.html',
  styleUrl: './home-body.css'
})
export class HomeBody {
  gap: "sm" | "md" | "lg" = "md";



}
