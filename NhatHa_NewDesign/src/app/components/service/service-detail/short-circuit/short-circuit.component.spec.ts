import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCircuitComponent } from './short-circuit.component';

describe('ShortCircuitComponent', () => {
  let component: ShortCircuitComponent;
  let fixture: ComponentFixture<ShortCircuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCircuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
