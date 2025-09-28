import { Component } from '@angular/core';
import {Card} from '../card/card';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatFabButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {PersonSelector} from '../person-selector/person-selector';

interface Person {
  name: string;
  initials: string;
  relation?: string;
  extra?: string;
  noStudies?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-study-body',
  imports: [
    MatIcon,
    RouterLink,
    Card,
  ],
  templateUrl: './study-body.html',
  styleUrl: './study-body.css'
})
export class StudyBody {
  gap: "sm" | "md" | "lg" = "md";

  people: Person[] = [
    { name: 'SANCHEZ MARIA ELENA', initials: 'SM', relation: 'Madre', selected: true },
    { name: 'JORGE SANCHEZ MARTIN', initials: 'JS', relation: 'Padre' },
    { name: 'LUCIA SANCHEZ MARIA', initials: 'LS', relation: 'Hija', extra: '23/09/2019', noStudies: true }
  ];

  selectedPerson: Person = this.people.find(p => p.selected)!;

  constructor(private modal: MatDialog) {}

  openPersonSelector() {
    const ref = this.modal.open(PersonSelector, {
      data: { people: this.people },
      panelClass: 'person-selector-modal'
    });

    ref.componentInstance.selected.subscribe((person: Person) => {
      this.selectedPerson = person;
    });
  }

}
