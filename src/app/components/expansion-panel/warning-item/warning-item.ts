import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-item',
  standalone: true,
  templateUrl: './warning-item.html',
  styleUrl: './warning-item.css'
})
export class WarningItem {
  @Input() warnings: string[] = [];
}
