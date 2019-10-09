import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraredWindowComponent } from './infrared-window.component';

describe('InfraredWindowComponent', () => {
  let component: InfraredWindowComponent;
  let fixture: ComponentFixture<InfraredWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraredWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraredWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
