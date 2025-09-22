import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBaseStructure } from './mobile-base-structure';

describe('MobileBaseStructure', () => {
  let component: MobileBaseStructure;
  let fixture: ComponentFixture<MobileBaseStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileBaseStructure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBaseStructure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
