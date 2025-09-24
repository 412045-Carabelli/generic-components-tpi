import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { Card } from '../card/card';
import { ButtonComponent } from '../button/button.component';

import { MatDialog } from '@angular/material/dialog';
import { GenericModal } from '../modal/generic-modal/generic-modal';
import { GenericForm, FormConfig } from '../form/generic-form/generic-form';
import {ExpansionPanel} from '../expansion-panel/generic-panel/expansion-panel';
import {WarningItem} from '../expansion-panel/warning-item/warning-item';

type EstadoTurno = 'Confirmado' | 'Pendiente' | 'Cancelado';

interface Turno {
  id: string;
  estudio: string;
  fecha: string;
  hora: string;
  doctor: string;
  sede: string;
  advertencias?: string[];
  estado: EstadoTurno;
}

@Component({
  selector: 'app-appointments-body',
  standalone: true,
  imports: [ButtonComponent, Card, MatIcon,
    ExpansionPanel,
    WarningItem],
  templateUrl: './appointments-body.html',
  styleUrl: './appointments-body.css'
})
export class AppointmentsBody {
  private router = inject(Router);
  private dialog = inject(MatDialog);

  paciente = { nombre: 'SANCHEZ MARIA ELENA', rol: 'Paciente' };

  turnos: Turno[] = [
    {
      id: 't1',
      estudio: 'Análisis de Sangre Completo',
      fecha: '15/09/2024',
      hora: '10:00',
      doctor: 'Dr. García López',
      sede: 'Sucursal Centro',
      advertencias: ['Preparación: Ayuno de 12 horas'],
      estado: 'Confirmado'
    },
    {
      id: 't2',
      estudio: 'Radiografía de Columna',
      fecha: '20/09/2024',
      hora: '14:30',
      doctor: 'Dra. Martínez Silva',
      sede: 'Sucursal Norte',
      advertencias: ['Preparación: Sin preparación especial'],
      estado: 'Confirmado'
    }
  ];

  get iniciales(): string {
    const parts = this.paciente.nombre.trim().split(/\s+/).slice(0, 2);
    return parts.map(p => p[0]).join('').toUpperCase();
  }

  // Placeholder hasta que me pases el FormConfig definitivo
  private nuevoTurnoFormConfig: FormConfig = {
    submitText: 'Crear turno',
    fields: [
      { key: 'paciente', type: 'text', label: 'Paciente', required: true, placeholder: 'Nombre y apellido' },
      {
        key: 'estudio', type: 'select', label: 'Estudio', required: true,
        options: [
          { value: 'sangre', label: 'Análisis de Sangre' },
          { value: 'orina',  label: 'Análisis de Orina'  }
        ]
      },
      { key: 'fecha', type: 'date', label: 'Fecha', required: true, placeholder: 'dd/mm/yyyy' },
      { key: 'hora',  type: 'time', label: 'Hora',  required: true },
      {
        key: 'sede',  type: 'select', label: 'Sede',  required: true,
        options: [
          { value: 'Centro', label: 'Sucursal Centro' },
          { value: 'Norte',  label: 'Sucursal Norte'  }
        ]
      },
      { key: 'observaciones', type: 'textarea', label: 'Observaciones' }
    ]
  };

  solicitarNuevoTurno() {
    this.dialog.open(GenericModal, {
      width: '720px',
      data: {
        properties: {
          headerText: 'Solicitar nuevo turno',
          headerColor: '#ffffff',
          headerBackgroundColor: '#169b8e',
          edgeRound: 16,
          color: '#ffffff',
          padding: 20,
          // Contenido: tu GenericForm
          content: GenericForm,
          // Inputs del contenido (FormConfig + valores iniciales)
          contentInputs: {
            config: this.nuevoTurnoFormConfig,
            value: { observaciones: '' }
          }
          // IMPORTANTE: sin "buttons" -> NO aparece el footer del modal
        }
      }
    });
  }

  modificarTurno(id: string) {
    this.router.navigate(['/turnos', id, 'editar']);
  }

  public redirect(route:string) {
    this.router.navigate([route]);
  }
}
