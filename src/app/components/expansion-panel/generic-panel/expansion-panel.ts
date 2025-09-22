import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-expansion-panel',
  imports: [MatExpansionModule, MatIconModule, MatBadgeModule],
  templateUrl: './expansion-panel.html',
  styleUrl: './expansion-panel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanel {
  @Input() title!: string;
  @Input() description?: string;
  @Input() badge?: number; // ← cantidad de ítems para el badge
  readonly panelOpenState = signal(false);
}
