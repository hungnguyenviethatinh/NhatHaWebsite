import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordexMn4000Component } from './cordex-mn4000.component';

describe('CordexMn4000Component', () => {
  let component: CordexMn4000Component;
  let fixture: ComponentFixture<CordexMn4000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordexMn4000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordexMn4000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
