import {Component, Input} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-warning-item',
  imports: [
    MatBadgeModule
  ],
  templateUrl: './warning-item.html',
  styleUrl: './warning-item.css'
})
export class WarningItem {
  @Input() warnings: string[] = [];
}
