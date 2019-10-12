import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrissDischargeComponent } from './iriss-discharge.component';

describe('IrissDischargeComponent', () => {
  let component: IrissDischargeComponent;
  let fixture: ComponentFixture<IrissDischargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrissDischargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrissDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
