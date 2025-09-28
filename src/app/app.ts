import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BaseStructure} from './components/base-structure/base-structure';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [BaseStructure],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('structure-prototype');
}
