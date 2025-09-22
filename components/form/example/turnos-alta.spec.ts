import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosAlta } from './turnos-alta';

describe('TurnosAlta', () => {
  let component: TurnosAlta;
  let fixture: ComponentFixture<TurnosAlta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnosAlta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosAlta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
