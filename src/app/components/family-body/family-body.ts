import {Component, inject} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {Card} from '../card/card';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {DialogProperties, GenericModal} from '../modal/generic-modal/generic-modal';
import {MatDialog} from '@angular/material/dialog';
import {ExampleContent} from '../modal/example-content/example-content';

@Component({
  selector: 'app-family-body',
  imports: [
    ButtonComponent,
    Card,
    MatIcon,
    RouterLink
  ],
  templateUrl: './family-body.html',
  styleUrl: './family-body.css'
})
export class FamilyBody {

  private dialog = inject(MatDialog);
  receivedMessage:number = 0;

  user = {
    fullName: 'SANCHEZ MARIA ELENA',
    role: 'Paciente',
    email: undefined,
    phone: undefined
  };

  onButton(which: 'close' | 'save') {
    if (which === 'close') {
      console.log('se recibe el mensaje de cierre, permitiendo logica en el padre');
    } else if (which === 'save') {
      console.log('Guardar cambios');
    }
  }

  properties: DialogProperties = {
    content: ExampleContent,
    padding: 20,
    color: '#f9fafb',
    headerText: 'Agregar Familiar',
    headerColor: '#fff',
    headerBackgroundColor: '#00BBB0', // blue header bar
    buttons: [{
      component: ButtonComponent,
      inputs: { text: 'Cancelar', bgType: 'state-warn', width: "110%", xPad: '10px', yPad: '4px' },
      outputs: { clicked: () => this.onButton('close') }
    },
      {
        component: ButtonComponent,
        inputs: { text: 'Agregar', bgType: 'state-success', width: "110%", xPad: '10px', yPad: '4px' },
        outputs: { clicked: () => this.onButton('save') }
      }],
  }

  openModal() {
    const ref = this.dialog.open(GenericModal,{
      data: {
        user: this.user,
        properties: this.properties
      }
    })
    ref.componentInstance.responseSent.subscribe((n: number) => {
      this.receivedMessage = n; //message received from child component
    });
  }
}
