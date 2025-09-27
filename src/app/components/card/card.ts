import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class Card {
  @Input() layout: 'row' | 'column' = 'row';

  @Input() hovereable = true;

  @Input() paddingX: string = '1.5rem';
  @Input() paddingY: string = '3rem';

  @Input() marginX: string = '0px';
  @Input() marginY: string = '0px';

  @Input() bgColor?: string;

  @Input('color-tailwind') colorTailwind: string = 'bg-[#f7f9fa]';


  get resolvedBgColor(): string {
    if (this.bgColor && this.bgColor.trim()) return this.bgColor;

    const t = this.colorTailwind?.trim() || '';
    const m = t.match(/^bg-\[(.+)\]$|^bg\[(.+)\]$|^bg:\[(.+)\]$/);
    const raw = m?.[1] ?? m?.[2] ?? m?.[3];

    if (raw) return raw;

    if (t === 'bg-white') return '#ffffff';
    if (t === 'bg-transparent') return 'transparent';

    return 'var(--card)';
  }
}
