import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningItem } from './warning-item';

describe('WarningItem', () => {
  let component: WarningItem;
  let fixture: ComponentFixture<WarningItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
