import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

/* Angular Material: solo lo que el template usa */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSelectModule }    from '@angular/material/select';
import { MatDatepickerModule }from '@angular/material/datepicker';
import { MatNativeDateModule }from '@angular/material/core';
import { MatButtonModule }    from '@angular/material/button';
import { MatIconModule }      from '@angular/material/icon';

/** Tipos de campo que soporta el componente genérico */
export interface FieldConfig {
  key: string;                                  // Nombre del control dentro del FormGroup
  type: 'text' | 'number' | 'textarea' | 'date' | 'time' | 'select';
  label: string;                                // Etiqueta visible
  placeholder?: string;                         // Placeholder (opcional)
  required?: boolean;                           // Agrega Validators.required si true
  options?: { value: any; label: string }[];    // Para 'select'
}

/** Config general del formulario (texto del botón + lista de campos) */
export interface FormConfig {
  submitText?: string;
  fields: FieldConfig[];
}

/**
 * Componente de formulario genérico (standalone + Angular Material + Reactive Forms).
 * Recibe:
 *  - config: describe los campos
 *  - value : valores iniciales (opcional)
 * Emite:
 *  - formSubmit: valores del formulario cuando es válido y se hace submit
 */
@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './generic-form.html',
  styleUrls: ['./generic-form.scss'],
})
export class GenericForm implements OnInit, OnChanges {
  /** Configuración de campos y texto del botón de submit */
  @Input() config!: FormConfig;

  /** Valores iniciales opcionales (se parchean sobre el form) */
  @Input() value: Record<string, any> | null = null;

  /** Evento de envío con los valores del formulario */
  @Output() formSubmit = new EventEmitter<any>();

  /** Formulario reactivo generado en base a la config */
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  /** Construye los controles a partir de config.fields */
  ngOnInit(): void {
    const group: Record<string, any> = {};
    this.config.fields.forEach((field) => {
      group[field.key] = field.required ? [null, Validators.required] : [null];
    });
    this.form = this.fb.group(group);

    // Si viene un valor inicial, lo aplicamos
    if (this.value) this.form.patchValue(this.value);
  }

  /** Si cambian los valores iniciales desde afuera, los aplicamos */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']?.currentValue && this.form) {
      this.form.patchValue(changes['value'].currentValue);
    }
  }

  /** Handler de submit: emite valores si es válido, sino marca errores */
  submit(): void {
    console.log('[GenericForm] submit() valid=', this.form.valid, 'value=', this.form.value);
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  /** Restablece el formulario al valor inicial */
  // útil si querés llamarlo desde afuera también
  resetToInitial(): void {
    this.form.reset(this.value ?? {});
  }
}
