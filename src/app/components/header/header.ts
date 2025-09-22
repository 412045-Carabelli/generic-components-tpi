import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Input() showButton: boolean = false;

  @Input() paddingY: 1 | 2 | 3 | 4 | 5 = 2;

}
