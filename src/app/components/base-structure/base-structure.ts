import { Component } from '@angular/core';
import {Header} from '../header/header';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {ButtonComponent} from '../button/button.component';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-base-structure',
  imports: [
    Header,
    RouterOutlet,
  ],
  templateUrl: './base-structure.html',
  styleUrl: './base-structure.css'
})
export class BaseStructure {
  showButton: boolean = true;

  onMenuClick() {

  }

  onBackClick() {

  }
}
