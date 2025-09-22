import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContent } from './example-content';

describe('ExampleContent', () => {
  let component: ExampleContent;
  let fixture: ComponentFixture<ExampleContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
