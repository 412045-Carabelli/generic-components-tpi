import {Component, inject} from '@angular/core';
import {Header} from '../header/header';
import {Card} from '../card/card';
import {Router} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {ButtonComponent} from '../button/button.component';
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
  imports: [
    ButtonComponent,
    Card,
    MatIcon,
    ExpansionPanel,
    WarningItem
  ],
  templateUrl: './appointments-body.html',
  styleUrl: './appointments-body.css'
})
export class AppointmentsBody {
  private router = inject(Router);


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

  solicitarNuevoTurno() {

    this.router.navigateByUrl('/turnos/nuevo');
  }

  modificarTurno(id: string) {

    this.router.navigate(['/turnos', id, 'editar']);
  }

  volverInicio() {
    this.router.navigateByUrl('/home');
  }
}

