import { Component } from '@angular/core';
import {Header} from '../header/header';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {ButtonComponent} from '../button/button.component';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-mobile-base-structure',
  imports: [
    Header,
    RouterOutlet,
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
