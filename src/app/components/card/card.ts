import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    NgClass
  ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() layout: 'row' | 'column' = 'row';

  @Input() hovereable = true;

  @Input() paddingX: 1 | 2 | 3 | 4 | 5 = 1;

  @Input() paddingY: 1 | 2 | 3 | 4 | 5 = 4;

  @Input('color-tailwind') colorTailwind: string = "bg-[#f7f9fa]";
}
