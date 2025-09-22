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

  @Input() paddingX: string = "1rem";

  @Input() paddingY: string = "4rem";

  @Input('color-tailwind') colorTailwind: string = "bg-[#f7f9fa]";
}
