import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsBody } from './appointments-body';

describe('AppointmentsBody', () => {
  let component: AppointmentsBody;
  let fixture: ComponentFixture<AppointmentsBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
