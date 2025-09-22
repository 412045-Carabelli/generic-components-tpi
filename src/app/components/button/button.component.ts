import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Generic reusable button component with customizable styles and Material Design integration
 *
 * This component provides a flexible button implementation that supports:
 * - Custom text and icons
 * - Multiple predefined color themes
 * - Configurable dimensions and padding
 * - Click event handling with disabled state support
 *
 * @example
 * ```html
 * <app-button
 *   text="Save Changes"
 *   type="primary"
 *   icon="save"
 *   width="200px"
 *   height="45px"
 *   (clicked)="onSaveClick()">
 * </app-button>
 * ```
 */
@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.css',
})
export class ButtonComponent {
  /**
   * The text content displayed inside the button
   * @default 'place holder'
   */
  @Input() text: string = 'place holder';

  /**
   * Horizontal padding applied to the button content
   * Accepts any valid CSS padding value (px, %, em, rem, etc.)
   * @default '6%'
   */
  @Input() xPad: string = '6%';

  /**
   * Vertical padding applied to the button content
   * Accepts any valid CSS padding value (px, %, em, rem, etc.)
   * @default '4%'
   */
  @Input() yPad: string = '4%';

  /**
   * Total width of the button component container
   * Accepts any valid CSS width value (px, %, vw, etc.)
   * @default '20%'
   */
  @Input() width?: string = '20%';

  /**
   * Total height of the button component container
   * Accepts any valid CSS height value (px, %, vh, etc.)
   * @default '10%'
   */
  @Input() height?: string = '10%';

  /**
   * Visual theme/color scheme of the button
   * Each type corresponds to a predefined background color in the CSS
   * @default 'white'
   */
  @Input() type: 'white' | 'primary' | 'secondary' | 'warning' | 'danger' = 'white';

  /**
   * Controls whether the button is disabled and non-interactive
   * When true, the button cannot be clicked and appears visually disabled
   * @default false
   */
  @Input() disable: boolean = false;

  /**
   * Color of the button text content
   * Accepts any valid CSS color value (hex, rgb, rgba, named colors, etc.)
   * @default 'black'
   */
  @Input() txtColor: string = 'black';

  /**
   * Font size of the button text content
   * Accepts any valid CSS font-size value (px, em, rem, %, small, medium, large, etc.)
   * @default 'large'
   */
  @Input() txtSize: string = 'large';

  /**
   * Optional input used to determinate the background color of the button
   */
  @Input() bgColor?: string;
  /**
   * Optional Material Design icon name to display alongside the text
   * Uses Material Icons font - pass the icon name as a string
   * @example 'save', 'delete', 'edit', 'arrow_forward'
   * @default undefined (no icon displayed)
   */
  @Input() icon?: string;

  /**
   * Event emitted when the button is successfully clicked
   * Only fires if the button is not disabled
   * Emits a boolean value (always true when fired)
   */
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  /**
   * Generates inline CSS styles for the button element based on input properties
   *
   * Combines padding, color, typography, and sizing styles into a single string
   * The button is set to fill 100% of its container dimensions
   *
   * @returns CSS style string to be applied to the button element
   * @private
   */
  implButtonStyles(): string {
    let styles = `padding: ${this.yPad} ${this.xPad}; `;
    styles += `color: ${this.txtColor}; `;
    styles += `font-size: ${this.txtSize}; `;

    if (this.bgColor) {
      styles += `background-color: ${this.bgColor}; `;
    }

    return styles;
  }

  /**
   * Generates inline CSS styles for the container div element
   *
   * Controls the overall dimensions of the button component by setting
   * the width and height of the wrapping container element
   *
   * @returns CSS style string to be applied to the container div
   * @private
   */
  implContainerStyles(): string {
    let containerStyles = '';

    containerStyles += `width: ${this.width}; `;
    containerStyles += `height: ${this.height}; `;

    if (this.disable) {
      containerStyles += 'filter: brightness(0.6); cursor: not-allowed; opacity: 0.7; ';
    } else {
      containerStyles += 'cursor: pointer; ';
    }

    return containerStyles;
  }

  /**
   * Handles button click events with disabled state validation
   *
   * This method is triggered when the button container is clicked.
   * It checks if the button is enabled before emitting the click event.
   *
   * @fires clicked - Emits true when the button is clicked and not disabled
   * @public
   */
  buttonClickEvent(): void {
    if (!this.disable) {
      this.clicked.emit(true);
    }
  }
}
