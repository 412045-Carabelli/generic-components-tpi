import { Component } from '@angular/core';
import {Header} from '../header/header';
import {ButtonComponent} from '../button/button';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-mobile-base-structure',
  imports: [
    Header,
    ButtonComponent,
    RouterOutlet,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './mobile-base-structure.html',
  styleUrl: './mobile-base-structure.css'
})
export class MobileBaseStructure {
  showButton: boolean = true;

  onMenuClick() {

  }

  onBackClick() {

  }
}
