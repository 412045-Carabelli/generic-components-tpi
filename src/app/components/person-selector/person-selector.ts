import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import {NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

// Tipo de datos de cada persona
interface Person {
  name: string;
  initials: string;
  relation?: string;
  extra?: string;
  noStudies?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-person-selector',
  imports: [
    MatListModule,
    MatLineModule,
    MatDialogContent,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './person-selector.html',
  styleUrl: './person-selector.css'
})
export class PersonSelector {
  // Emite el evento cuando se selecciona una persona
  @Output() selected = new EventEmitter<Person>();
  // Lista de personas que se muestra en el modal
  people: Person[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,  // Recibe datos pasados al abrir el modal
    private ref: MatDialogRef<PersonSelector>  // Referencia al modal para poder cerrarlo
  ) {
    // Asigna los datos recibidos (lista de personas) a la propiedad local
    this.people = data.people ?? [];
  }

  // Marca una persona como seleccionada y emite el cambio al componente padre
  select(p: Person) {
    this.people.forEach(x => x.selected = false); // Desmarca a todas
    p.selected = true; // Marca a la actual

    this.selected.emit(p);  // Informa al padre quién fue seleccionada
    this.ref.close();       // Cierra el modal
  }

  close() {
    this.ref.close();
  }
}
