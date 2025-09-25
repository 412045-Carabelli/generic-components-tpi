import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogProperties, GenericModal} from './generic-modal/generic-modal';
import { ExampleContent } from './example-content/example-content';
import {MatCard} from '@angular/material/card';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-home',
  imports: [
    MatCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  /*Instancia de dialogo*/
  private dialog = inject(MatDialog);

  /*Mensaje recibido desde el componente hijo*/
  receivedMessage:number=0;

  /*mock usuarios*/
  user = {
    fullName: 'SANCHEZ MARIA ELENA',
    role: 'Paciente',
    email: undefined,
    phone: undefined
  };

  /* propiedades del dialog/modal */
  properties: DialogProperties = {
    content: ExampleContent,
    padding: 20,
    color: '#f9fafb',
    headerText: 'User Profile',
    headerColor: '#fff',
    headerBackgroundColor: '#2563eb',
    /* array de componentes de boton con propiedades customizadas */
    buttons: [{
      component: ButtonComponent,
      inputs: { text: 'cancel',  bgColor: '#e500ff', txtColor: '#ffffff' },
      outputs: { clicked: () => this.onButton('close') }
    },
      {
        component: ButtonComponent,
        inputs: { text: 'Save', bgColor: 'rgba(30,229,47,0.78)', txtColor: '#fff' },
        outputs: { clicked: () => this.onButton('save') }
      }],
     }


  /*Metodo para mostrar el dialogo en pantalla (abrir el modal)*/
  public openDialog(){
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

  /*Medoto para el manejo de mensajes de botones dentro del modal*/
  onButton(which: 'close' | 'save') {
    if (which === 'close') {
      console.log('se recibe el mensaje de cierre, permitiendo logica en el padre');
    } else if (which === 'save') {
      console.log('Guardar cambios');
    }
  }
}
