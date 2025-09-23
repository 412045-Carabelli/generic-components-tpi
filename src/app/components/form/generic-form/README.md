# GenericFormComponent

Componente **genérico de formulario** basado en **Angular Material + Reactive Forms**.  
Su objetivo es centralizar la creación de formularios dentro del portal, evitando que cada equipo duplique lógica de formularios.  
Con una simple configuración (`FormConfig`) se puede reutilizar en múltiples pantallas (alta de turnos, edición de paciente, solicitudes, etc.).

---

## Características

- **Standalone** → no depende de un módulo, se importa directamente en el padre.
- **Configurable** → los campos y textos se definen con un objeto `FormConfig`.
- **Tipos de campos soportados**:
  - `text`
  - `number`
  - `textarea`
  - `date` (usa `touchUi`, abre modal en mobile)
  - `time`
  - `select` (con lista de opciones dinámicas)
- **Validaciones**:
  - Si un campo es `required: true`, se aplica automáticamente `Validators.required`.
- **Botones incluidos**:
  - **Cancelar** → resetea el formulario al valor inicial.
  - **Submit** → emite los valores del form. Está deshabilitado mientras el form sea inválido.
- **Estilos encapsulados**:
  - Paleta de colores pastel definida en `generic-form.scss`.
  - Inputs estilo “fill”, con fondo gris claro y aro verde pastel en foco.
  - Botones redondeados (submit verde pastel, cancelar outlined).
  - Datepicker con modal adaptado a mobile.
- **Slot de título**: cada pantalla puede definir su propio encabezado con `<ng-content select="[gf-title]">`.

---

## API del componente

### Inputs
- `@Input() config: FormConfig`  
  Configuración del formulario (campos y texto de submit).

- `@Input() value: Record<string, any>`  
  Valores iniciales opcionales. Se usan al inicializar el form y al presionar **Cancelar**.

### Outputs
- `@Output() formSubmit = new EventEmitter<any>()`  
  Evento emitido al hacer submit con el valor del formulario.

---

## Interfaces

```
export interface FieldConfig {
  key: string; // Nombre del control dentro del FormGroup
  type: 'text' | 'number' | 'textarea' | 'date' | 'time' | 'select';
  label: string; // Texto visible en el label
  placeholder?: string;
  required?: boolean;
  options?: { value: any; label: string }[]; // Solo para 'select'
}

export interface FormConfig {
  submitText?: string;   // Texto del botón submit
  fields: FieldConfig[]; // Campos a renderizar
}
```


## Ejemplos de uso
```
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFormComponent, FormConfig } from '../../shared/generic-form/generic-form';

@Component({
  selector: 'app-turnos-alta',
  standalone: true,
  imports: [CommonModule, GenericFormComponent],
  templateUrl: './turnos-alta.html',
  styleUrls: ['./turnos-alta.scss'],
})
export class TurnosAltaComponent {
  config: FormConfig = {
    submitText: 'Crear turno',
    fields: [
      { key: 'paciente', type: 'text', label: 'Paciente', required: true, placeholder: 'Nombre y apellido' },
      { key: 'estudio', type: 'select', label: 'Estudio', required: true,
        options: [
          { value: 'sangre', label: 'Análisis de Sangre' },
          { value: 'orina',  label: 'Análisis de Orina'  }
        ]
      },
      { key: 'fecha', type: 'date', label: 'Fecha', required: true },
      { key: 'hora', type: 'time', label: 'Hora', required: true },
      { key: 'observaciones', type: 'textarea', label: 'Observaciones' },
    ],
  };

  initialValue = { observaciones: '' };

  onSubmit(value: any) {
    console.log('Turno enviado:', value);
    // Aquí iría la lógica para guardar en backend/servicio
  }
}
```

## Plantilla en el html padre
```
<app-generic-form
  [config]="config"
  [value]="initialValue"
  (formSubmit)="onSubmit($event)"
>
  <h2 gf-title class="gf-title">Solicitar Nuevo Turno</h2>
</app-generic-form>
```

## Estructura de carpeta
```
src/app/shared/generic-form/
  ├─ generic-form.ts      # Lógica del componente (standalone)
  ├─ generic-form.html    # Template con Angular Material
  ├─ generic-form.scss    # Estilos encapsulados del componente
  └─ README.md            # Esta documentación

src/app/turnos/turnos-alta/
  ├─ turnos-alta.ts       # Pantalla que consume GenericForm
  ├─ turnos-alta.html     # Vista que instancia <app-generic-form>
  └─ turnos-alta.scss     # Estilos específicos de esa pantalla
```