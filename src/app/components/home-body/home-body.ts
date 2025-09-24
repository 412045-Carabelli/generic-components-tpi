import {MatIcon} from '@angular/material/icon';
import {Card} from '../card/card';
import {Router, RouterLink} from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import {Component, HostListener, inject, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-body',
  imports: [
    MatIcon,
    Card,
    RouterLink,
    IconComponent
  ],
  templateUrl: './home-body.html',
  styleUrl: './home-body.css'
})
export class HomeBody {
  gap: "sm" | "md" | "lg" = "md";

  constructor(private router: Router) {}

  public redirect(route:string) {
    this.router.navigate([route]);
  }

  isOnline: boolean = true;
  //esto para testear -> FUNCIONALIDAD PARA DETECTAR SI LA APP ESTA OFFLINE O ONLINE
  // isOnline: boolean = navigator.onLine;
  //
  // @HostListener('window:online')
  // onOnline() {
  //   this.isOnline = true;
  // }
  //
  // @HostListener('window:offline')
  // onOffline() {
  //   this.isOnline = false;
  // }
  //
  // private intervalId: any;

  // ngOnInit() {
  // // chequeo periódico cada 30s
  // this.intervalId = setInterval(() => {
  //   this.verificarConexionReal();
  // }, 30000);
  //
  // // chequeo inicial
  // this.verificarConexionReal();
  // }
  // ngOnDestroy() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }
  // private async verificarConexionReal() {
  //   try {
  //     // endpoint muy liviano de Google que devuelve 204 (sin contenido) // problema de cors -> funciona pero abria que hacerlo con un controlador PING
  //     const response = await fetch('https://www.gstatic.com/generate_204', {
  //       method: 'GET',
  //       cache: 'no-cache'
  //     });
  //     this.isOnline = response.ok;
  //   } catch {
  //     this.isOnline = false;
  //   }
  // }
}
