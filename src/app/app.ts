import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MobileBaseStructure} from './components/mobile-base-structure/mobile-base-structure';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [MobileBaseStructure],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('structure-prototype');
}
