import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Card } from '../card/card';
import { Router, RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [MatIcon, Card, RouterLink, IconComponent, ButtonComponent],
  templateUrl: './home-body.html',
  styleUrl: './home-body.css'
})
export class HomeBody {
  gap: 'sm' | 'md' | 'lg' = 'md';
  isOnline: boolean = true;

  constructor(private router: Router) {}

  redirect(route: string) {
    this.router.navigate([route]);
  }

  sendToWhatsApp(message: string): void {
    const phoneNumber = '5551234567';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
