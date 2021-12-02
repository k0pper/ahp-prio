import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaNamesComponent } from './criteria-names.component';

describe('CriteriaNamesComponent', () => {
  let component: CriteriaNamesComponent;
  let fixture: ComponentFixture<CriteriaNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteriaNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
