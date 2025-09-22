import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyBody } from './family-body';

describe('FamilyBody', () => {
  let component: FamilyBody;
  let fixture: ComponentFixture<FamilyBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
