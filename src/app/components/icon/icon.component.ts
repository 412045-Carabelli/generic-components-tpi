import {Component, Input} from '@angular/core';

type IconSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() iconSize: IconSize = 'md';
  @Input() backgroundColor: string = 'transparent';
  @Input() iconColor: string = 'white';
  @Input() borderRadius: string = '.5rem';
  @Input() margin: string = '4px';
  @Input() shadow: 'true' | 'false' = "false";
  @Input() padding: string = "";
}
