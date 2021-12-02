import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaQuantityComponent } from './criteria-quantity.component';

describe('CriteriaQuantityComponent', () => {
  let component: CriteriaQuantityComponent;
  let fixture: ComponentFixture<CriteriaQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteriaQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
