import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitHomeComponent } from './profit-home.component';

describe('ProfitHomeComponent', () => {
  let component: ProfitHomeComponent;
  let fixture: ComponentFixture<ProfitHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
