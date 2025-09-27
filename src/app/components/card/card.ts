import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    NgClass
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class Card {

  /*define el tipo de orientacion del contenido la card en columnas o filas*/
  @Input() layout: 'row' | 'column' = 'row';

  /*agrega reaccion al superponer el mouse sobre la card*/
  @Input() hovereable = true;

  /*agrega padding horizontal a la card*/
  @Input() paddingX: string = "1rem";

  /*agrega padding vertical a la card*/
  @Input() paddingY: string = "4rem";

  /*define el color de fondo de la card*/
  @Input('color-tailwind') colorTailwind: string = "bg-[#f7f9fa]";

  /*agrega margen horizontal a la card*/
  @Input() marginX: string = "0px"

  /*agrega margen vertical a la card*/
  @Input() marginY: string = "0px"
}
