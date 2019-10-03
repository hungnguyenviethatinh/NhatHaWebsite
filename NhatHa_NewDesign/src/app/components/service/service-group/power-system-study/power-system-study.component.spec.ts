import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSystemStudyComponent } from './power-system-study.component';

describe('PowerSystemStudyComponent', () => {
  let component: PowerSystemStudyComponent;
  let fixture: ComponentFixture<PowerSystemStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSystemStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSystemStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
