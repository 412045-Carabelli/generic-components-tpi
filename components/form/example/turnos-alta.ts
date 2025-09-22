import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Importamos el componente standalone para poder usar su selector en el HTML */
import { GenericForm, FormConfig } from '../../shared/generic-form/generic-form';

@Component({
  selector: 'app-turnos-alta',
  standalone: true,
  imports: [CommonModule, GenericForm],
  templateUrl: './turnos-alta.html',
  styleUrls: ['./turnos-alta.scss'],
})
export class TurnosAltaComponent {
  /** Config del formulario de "Alta de turno" */
  config: FormConfig = {
    submitText: 'Crear turno',
    fields: [
      { key: 'paciente', type: 'text', label: 'Paciente', required: true, placeholder: 'Nombre y apellido' },
      { key: 'estudio', type: 'select', label: 'Estudio', required: true,
        options: [
          { value: 'sangre', label: 'Análisis de Sangre' },
          { value: 'orina',  label: 'Análisis de Orina'  },
        ]
      },
      { key: 'fecha', type: 'date', label: 'Fecha', required: true, placeholder: 'dd/mm/yyyy' },
      { key: 'hora', type: 'time', label: 'Hora', required: true },
      { key: 'observaciones', type: 'textarea', label: 'Observaciones' },
    ],
  };

  /** Valores iniciales (opcional) */
  initialValue = { observaciones: '' };

  /** Recibe el submit del componente genérico */
  onSubmit(value: any) {
    console.log('Turno enviado:', value);
    // acá despachás al backend / servicio
  }
}
