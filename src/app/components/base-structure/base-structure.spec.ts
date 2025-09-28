import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStructure } from './base-structure';

describe('BaseStructure', () => {
  let component: BaseStructure;
  let fixture: ComponentFixture<BaseStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseStructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseStructure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
