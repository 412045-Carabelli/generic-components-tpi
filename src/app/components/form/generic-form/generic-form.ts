import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

/* Angular Material: solo lo que el template usa */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSelectModule }    from '@angular/material/select';
import { MatDatepickerModule }from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule }    from '@angular/material/button';
import { MatIconModule }      from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

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
 *
 * Extras:
 *  - Snackbar “Turno creado con éxito” al enviar
 *  - Cierra el MatDialog si está embebido en uno
 *  - Provee DateAdapter nativo para que el datepicker funcione dentro del modal
 *  - NUEVO: botón "Cancelar" cierra el diálogo (sin enviar) y emite formCancel
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
    MatSnackBarModule,
  ],
  templateUrl: './generic-form.html',
  styleUrls: ['./generic-form.scss'],
  // Providers locales: con esto el datepicker deja de tirar "No provider for DateAdapter"
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' }, // opcional: locale
  ],
})
export class GenericForm implements OnInit, OnChanges {
  /** Configuración de campos y texto del botón de submit */
  @Input() config!: FormConfig;

  /** Valores iniciales opcionales (se parchean sobre el form) */
  @Input() value: Record<string, any> | null = null;

  /** Evento de envío con los valores del formulario */
  @Output() formSubmit = new EventEmitter<any>();

  /** NUEVO: evento de cancelación (por si el padre quiere escuchar) */
  @Output() formCancel = new EventEmitter<void>();

  /** Formulario reactivo generado en base a la config */
  form!: FormGroup;

  /** Servicios para feedback y (opcional) cierre del modal */
  private snack = inject(MatSnackBar);
  private dialogRef = inject<MatDialogRef<unknown>>(MatDialogRef, { optional: true });

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

  /** Handler de submit: emite valores si es válido, muestra snack y cierra modal */
  submit(): void {
    console.log('[GenericForm] submit() valid=', this.form.valid, 'value=', this.form.value);

    if (this.form.valid) {
      const payload = this.form.value;

      // Seguir emitiendo al padre (retrocompatible)
      this.formSubmit.emit(payload);

      // Feedback visual (snackbar)
      this.snack.open('Turno creado con éxito', 'Cerrar', {
        duration: 2500,
        panelClass: ['snack-success'], // estilos globales (ver styles.css)
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      // Cerrar el modal si estamos en uno (devolvemos el payload)
      this.dialogRef?.close(payload);
    } else {
      this.form.markAllAsTouched();
    }
  }

  /** Restablece el formulario al valor inicial (comportamiento previo) */
  resetToInitial(): void {
    this.form.reset(this.value ?? {});
  }

  /**
   * NUEVO: Cancela el formulario.
   * - Emite 'formCancel' (por si el host quiere reaccionar)
   * - Si está en un MatDialog, cierra el diálogo sin payload
   * - Si NO está en un MatDialog, hace fallback a resetear el formulario
   */
  cancel(): void {
    this.formCancel.emit();
    if (this.dialogRef) {
      this.dialogRef.close(); // cierre "limpio" del modal
    } else {
      // fallback si el form no está dentro de un modal
      this.resetToInitial();
    }
  }
}
