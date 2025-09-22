import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyBody } from './study-body';

describe('StudyBody', () => {
  let component: StudyBody;
  let fixture: ComponentFixture<StudyBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
