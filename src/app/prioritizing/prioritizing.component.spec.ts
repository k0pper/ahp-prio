import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritizingComponent } from './prioritizing.component';

describe('PrioritizingComponent', () => {
  let component: PrioritizingComponent;
  let fixture: ComponentFixture<PrioritizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioritizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
