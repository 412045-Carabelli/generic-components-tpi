import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSelector } from './person-selector';

describe('PersonSelector', () => {
  let component: PersonSelector;
  let fixture: ComponentFixture<PersonSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
