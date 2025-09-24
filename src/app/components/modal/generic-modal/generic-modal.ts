import { Component, EventEmitter, inject, Output, Type, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgComponentOutlet } from '@angular/common';

export interface DialogProperties {
  content: any;
  padding?: number;
  color?: string;
  buttons?: DynDef[];
  headerText?: string;
  headerColor?: string;
  headerBackgroundColor?: string;
  font?: FontFace;
  // 👇 Campo opcional y retrocompatible
  contentInputs?: Record<string, any>;
}

export type DynDef = {
  component: Type<any>;
  inputs?: Record<string, any>;
  outputs?: Record<string, (e: any) => void>;
};

@Component({
  selector: 'app-generic-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatDividerModule, NgComponentOutlet],
  templateUrl: './generic-modal.html',
  styleUrl: './generic-modal.css'
})
export class GenericModal implements OnInit {
  data = inject<any>(MAT_DIALOG_DATA);
  private ref = inject(MatDialogRef<GenericModal>);
  @Output() responseSent = new EventEmitter<number>();

  ngOnInit() {
    const container = document.querySelector('mat-dialog-container') as HTMLElement;
    if (container) {
      container.style.setProperty('--dialog-radius', `${this.data?.properties?.edgeRound ?? 8}px`);
    }
  }

  sendClickedMessage(btn: any) {
    btn.outputs?.['clicked']?.(null);
    this.responseSent.emit(1);
    this.ref.close();
  }

  get headerText(): string {
    return this.data?.properties?.headerText ?? '';
  }

  get headerColor(): string | undefined {
    return this.data?.properties?.headerColor;
  }

  get headerBackground(): string | undefined {
    return this.data?.properties?.headerBackgroundColor;
  }

  get bgColor(): string {
    return this.data?.properties?.color ?? '#ffffff';
  }

  get padPx(): number {
    return this.data?.properties?.padding ?? 16;
  }

  get contentCmp(): any {
    return this.data?.properties?.content;
  }

  // NUEVO: inputs para el componente contenido (p. ej. { config, value })
  get contentInputs(): Record<string, any> | undefined {
    return this.data?.properties?.contentInputs;
  }

  get buttons(): any[] {
    return this.data?.properties?.buttons ?? [];
  }
}
