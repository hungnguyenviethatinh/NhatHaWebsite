import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerQualityComponent } from './power-quality.component';

describe('PowerQualityComponent', () => {
  let component: PowerQualityComponent;
  let fixture: ComponentFixture<PowerQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
