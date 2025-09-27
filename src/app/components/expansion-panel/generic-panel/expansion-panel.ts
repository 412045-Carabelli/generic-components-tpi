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

  /*texto dento del modal*/
  @Input() title!: string;

  /*texto gris debajo del titulo*/
  @Input() description?: string;

  /*cantidad de ítems para el badge*/
  @Input() badge?: number;
  readonly panelOpenState = signal(false);
}
