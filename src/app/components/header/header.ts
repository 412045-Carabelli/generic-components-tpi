import {Component, computed, Input, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() showButton: boolean = false;

  @Input() paddingY: 1 | 2 | 3 | 4 | 5 = 2;

  isOpen = false;


  private _deferredPrompt = signal<any | null>(null);
    canInstall = computed(() => !!this._deferredPrompt());

    constructor() {
      window.addEventListener('beforeinstallprompt', (e: Event) => {
        e.preventDefault();
        this._deferredPrompt.set(e as any);
      });
    }

    async donwload(): Promise<any> {
      const p = this._deferredPrompt();
      if (!p) return;
      await p.prompt();
      await p.userChoice;
      this._deferredPrompt.set(null);

  }
}
