import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
/**
 * Generic reusable button component with customizable styles and Material Design integration
 *
 * This component provides a flexible button implementation that supports:
 * - Custom text and icons with flexible positioning
 * - Multiple predefined color themes based on design system
 * - Configurable dimensions, padding, borders and rounded corners
 * - Click event handling with disabled state support
 * - Hover effects with brightness adjustment
 * - Full CSS customization support through direct styling
 *
 * @example
 * Basic usage:
 * ```html
 * <app-button
 *   text="Save Changes"
 *   bgType="primary"
 *   icon="save"
 *   width="200px"
 *   height="45px"
 *   (clicked)="onSaveClick()">
 * </app-button>
 * ```
 *
 * @example
 * Advanced customization:
 * ```html
 * <app-button
 *   text="Custom Button"
 *   bgColor="#FF5722"
 *   txtColor="white"
 *   txtSize="16px"
 *   borderSize="2px"
 *   borderColor="#E91E63"
 *   rounded="25px"
 *   xPad="20px"
 *   yPad="12px"
 *   iconMarginR="8px"
 *   (clicked)="handleClick()">
 * </app-button>
 * ```
 */
@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.css',
  standalone: true
})
export class ButtonComponent {
  /**
   * Border thickness of the button
   * Accepts any valid CSS border-width value (px, em, rem, thin, medium, thick)
   * When set, creates a solid border with the specified borderColor
   * @example '1px', '2px', 'thin', 'medium'
   * @default undefined (no border)
   */
  @Input() borderSize?: string;

  /**
   * Color of the button border when borderSize is specified
   * Accepts any valid CSS color value (hex, rgb, rgba, hsl, named colors)
   * Only applies when borderSize is set
   * @example '#333333', 'rgb(51, 51, 51)', 'gray'
   * @default 'black'
   */
  @Input() borderColor: string = 'black';

  /**
   * Border radius for rounded corners of the button
   * Accepts any valid CSS border-radius value (px, %, em, rem)
   * Controls how rounded the button corners appear
   * @example '5px', '50%', '0' (sharp corners), '15px'
   * @default '10px'
   */
  @Input() rounded: string = '10px';

  /**
   * The text content displayed inside the button
   * This text appears alongside the icon if both are specified
   * Supports any string content including special characters
   * @example 'Save', 'Delete Item', 'Continue →'
   * @default 'place holder'
   */
  @Input() text: string = 'place holder';

  /**
   * Horizontal padding applied to the button content
   * Controls left and right internal spacing of the button
   * Accepts any valid CSS padding value (px, %, em, rem, etc.)
   * @example '10px', '1em', '5%'
   * @default '6%'
   */
  @Input() xPad: string = '6%';

  /**
   * Vertical padding applied to the button content
   * Controls top and bottom internal spacing of the button
   * Accepts any valid CSS padding value (px, %, em, rem, etc.)
   * @example '8px', '0.5em', '3%'
   * @default '4%'
   */
  @Input() yPad: string = '4%';

  /**
   * Total width of the button component container
   * Sets the overall width of the button including all styling
   * Accepts any valid CSS width value (px, %, vw, em, rem, auto, fit-content)
   * @example '150px', '100%', '20vw', 'auto', 'fit-content'
   * @default '20%'
   */
  @Input() width?: string = '20%';

  /**
   * Total height of the button component container
   * Sets the overall height of the button including all styling
   * Accepts any valid CSS height value (px, %, vh, em, rem, auto)
   * @example '40px', '100%', '5vh', 'auto'
   * @default '10%'
   */
  @Input() height?: string = '10%';

  /**
   * Visual theme/color scheme of the button using predefined design system colors
   * Each type corresponds to CSS custom properties defined in the design system
   * Provides consistent theming across the application
   *
   * Available themes:
   * - 'white': White background for light themes
   * - 'primary': Main brand color (--brand-primary)
   * - 'primary-700': Darker variant of primary (--brand-primary-700)
   * - 'secondary': Secondary brand color (--brand-secondary)
   * - 'accent': Accent/highlight color (--brand-accent)
   * - 'state-warn': Warning/error state (--brand-warn)
   * - 'state-success': Success/confirmation state (--brand-success)
   *
   * @default 'primary'
   */
  @Input() bgType: 'white' |
    'primary' | 'primary-700' |
    'secondary' | 'accent' |
    'state-warn' | 'state-success' = 'primary';

  /**
   * Controls whether the button is disabled and non-interactive
   * When true, the button:
   * - Cannot be clicked (events won't fire)
   * - Appears visually disabled with reduced opacity and brightness
   * - Shows a not-allowed cursor on hover
   * - Maintains all other styling but indicates unavailable state
   * @default false
   */
  @Input() disable: boolean = false;

  /**
   * Color of the button text content and icon
   * Accepts any valid CSS color value (hex, rgb, rgba, hsl, named colors)
   * Applies to both the text and icon elements for consistency
   * Consider contrast accessibility when choosing colors
   * @example '#FFFFFF', 'rgb(255, 255, 255)', 'white', '#333'
   * @default 'white'
   */
  @Input() txtColor: string = 'white';

  /**
   * Font size of the button text content
   * Accepts any valid CSS font-size value (px, em, rem, %, keywords)
   * Does not affect icon size (icons maintain Material Design sizing)
   * @example '14px', '1.2em', '16px', 'small', 'medium', 'large'
   * @default 'large'
   */
  @Input() txtSize: string = 'large';

  /**
   * Custom background color override
   * When specified, overrides the bgType theme color
   * Accepts any valid CSS color value for full customization
   * Use bgType for design system consistency, or bgColor for specific needs
   * @example '#FF5722', 'rgb(255, 87, 34)', 'linear-gradient(45deg, #ff0000, #0000ff)'
   * @default undefined (uses bgType instead)
   */
  @Input() bgColor?: string;

  /**
   * Optional Material Design icon name to display alongside the text
   * Uses Material Icons font library - pass the icon name as a string
   * Icon positioning is controlled by the iconPosition property
   * When specified, text and icon are aligned in a flex container
   * @see https://fonts.google.com/icons for available icons
   * @example 'save', 'delete', 'edit', 'arrow_forward', 'home', 'person'
   * @default undefined (no icon displayed)
   */
  @Input() icon?: string;

  /**
   * Position of the icon relative to the text content
   * Controls where the icon appears in relation to the button text
   * - 'left': Icon appears before the text (default behavior)
   * - 'right': Icon appears after the text
   * Only applies when icon is specified
   * @example 'left', 'right'
   * @default 'left'
   */
  @Input() iconPosition: 'left' | 'right' = 'left';

  /**
   * Spacing between the icon and text elements
   * Controls the gap between icon and text regardless of icon position
   * When iconPosition is 'left', this becomes right margin of the icon
   * When iconPosition is 'right', this becomes left margin of the icon
   * Accepts any valid CSS margin value (px, em, rem, %)
   * @example '8px', '0.5em', '4px', '1rem'
   * @default '8px'
   */
  @Input() iconSpacing: string = '3px';

  /**
   * Controls whether the button is in a loading state
   * When true, the button:
   * - Shows a loading spinner instead of the regular icon
   * - Displays loading text instead of regular text (if loadingText is provided)
   * - Becomes non-interactive (clicks are ignored)
   * - Maintains visual consistency with disabled styling
   * @default false
   */
  @Input() loading: boolean = false;

  /**
   * Text to display when the button is in loading state
   * If not provided, the regular text will be shown during loading
   * Useful for providing feedback about the ongoing operation
   * @example 'Guardando...', 'Procesando...', 'Enviando...'
   * @default undefined (uses regular text)
   */
  @Input() loadingText?: string;

  /**
   * Icon to display during loading state
   * Uses Material Icons font library - typically a spinning or progress icon
   * If not provided, a default loading spinner will be used
   * @example 'sync', 'hourglass_empty', 'refresh'
   * @default 'sync'
   */
  @Input() loadingIcon: string = 'sync';

  /**
   * Event emitted when the button is successfully clicked
   * Only fires if the button is not disabled (disable = false)
   * Emits a boolean value (always true when fired)
   * Use this event to handle user interactions with the button
   *
   * @example
   * ```html
   * <app-button (clicked)="handleSave($event)"></app-button>
   * ```
   *
   * @example
   * ```typescript
   * handleSave(clicked: boolean) {
   *   if (clicked) {
   *     // Handle button click logic
   *     this.saveData();
   *   }
   * }
   * ```
   */
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  /**
   * Generates inline CSS styles for the button element based on input properties
   *
   * Combines multiple styling aspects into a single CSS string:
   * - Padding (vertical and horizontal)
   * - Text color and font size
   * - Border radius for rounded corners
   * - Background color (if bgColor override is specified)
   * - Border styling (if borderSize is specified)
   *
   * The button is designed to fill 100% of its container dimensions
   * Additional styles like hover effects are handled via CSS classes
   *
   * @returns CSS style string to be applied to the button element via [style] binding
   * @private
   * @internal
   */
  implButtonStyles(): string {
    let styles: string = `padding: ${this.yPad} ${this.xPad}; `;
    styles += `color: ${this.txtColor}; `;
    styles += `font-size: ${this.txtSize}; `;
    styles +=  `border-radius: ${this.rounded}; `;

    if (this.bgColor) {
      styles += `background-color: ${this.bgColor}; `;
    }
    if (this.borderSize) {
      styles += `border: ${this.borderSize} solid ${this.borderColor}; `;
    }

    return styles;
  }

  /**
   * Generates inline CSS styles for the container div element
   *
   * Controls the overall dimensions and interaction behavior of the button component:
   * - Sets width and height of the wrapping container
   * - Handles disabled and loading state visual feedback (opacity, brightness, cursor)
   * - Manages cursor appearance for interactive states
   *
   * The container uses flexbox layout to properly center and size the button
   *
   * @returns CSS style string to be applied to the container div via [style] binding
   * @private
   * @internal
   */
  implContainerStyles(): string {
    let containerStyles = '';

    containerStyles += `width: ${this.width}; `;
    containerStyles += `height: ${this.height}; `;

    if (this.disable || this.loading) {
      containerStyles += 'filter: brightness(0.6); cursor: not-allowed; opacity: 0.7; ';
    } else {
      containerStyles += 'cursor: pointer; ';
    }

    return containerStyles;
  }

  /**
   * Handles button click events with disabled and loading state validation
   *
   * This method is triggered when the button container is clicked.
   * It implements guard clauses to prevent actions when the button is disabled or in loading state.
   * Only emits the clicked event when the button is in an enabled and non-loading state.
   *
   * The method provides a clean separation between UI interaction and business logic,
   * ensuring that disabled or loading buttons cannot trigger unintended actions.
   *
   * @fires clicked - Emits true when the button is clicked, enabled, and not loading
   * @public
   */
  buttonClickEvent(): void {
    if (!this.disable && !this.loading) {
      this.clicked.emit(true);
    }
  }

  /**
   * Generates CSS styles for the icon element positioning and spacing
   *
   * Handles dynamic icon positioning and spacing based on iconPosition property:
   * - When iconPosition is 'left': applies right margin for spacing
   * - When iconPosition is 'right': applies left margin for spacing
   *
   * This method provides consistent spacing between icon and text regardless
   * of icon positioning, ensuring proper visual alignment in all configurations.
   *
   * @returns CSS style string for icon margin styling based on position
   * @private
   * @internal
   */
  implIconStyles(): string {
    let styles = '';

    if (this.iconPosition === 'left') {
      styles += `margin-right: ${this.iconSpacing}; `;
    } else if (this.iconPosition === 'right') {
      styles += `margin-left: ${this.iconSpacing}; `;
    }

    return styles;
  }

  /**
   * Determines the currently displayed text based on loading state
   *
   * Returns the appropriate text to show in the button:
   * - If loading and loadingText is provided: returns loadingText
   * - Otherwise: returns the regular text property
   *
   * This computed property ensures consistent text display during state transitions.
   *
   * @returns The text string to display in the button
   * @public
   */
  get displayText(): string {
    return this.loading && this.loadingText ? this.loadingText : this.text;
  }

  /**
   * Determines the currently displayed icon based on loading state
   *
   * Returns the appropriate icon to show in the button:
   * - If loading: returns loadingIcon
   * - Otherwise: returns the regular icon property
   *
   * This computed property handles icon switching during loading states.
   *
   * @returns The icon string to display, or undefined if no icon should be shown
   * @public
   */
  get displayIcon(): string | undefined {
    return this.loading ? this.loadingIcon : this.icon;
  }
}
