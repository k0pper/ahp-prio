import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritizingIntroduction } from './prioritizing-introduction.component';

describe('PrioritizingComponent', () => {
  let component: PrioritizingIntroduction;
  let fixture: ComponentFixture<PrioritizingIntroduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioritizingIntroduction ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritizingIntroduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
