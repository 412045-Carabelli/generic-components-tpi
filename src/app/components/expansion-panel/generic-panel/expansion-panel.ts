import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expansion-panel',
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './expansion-panel.html',
  styleUrl: './expansion-panel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanel {
  @Input() title!: string;
  @Input() description?: string;
  @Input() badge?: number;
  readonly panelOpenState = signal(false);
}
