import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordexMn4100Component } from './cordex-mn4100.component';

describe('CordexMn4100Component', () => {
  let component: CordexMn4100Component;
  let fixture: ComponentFixture<CordexMn4100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordexMn4100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordexMn4100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
