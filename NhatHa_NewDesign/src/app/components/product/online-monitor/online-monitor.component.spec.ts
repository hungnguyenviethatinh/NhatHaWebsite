import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMonitorComponent } from './online-monitor.component';

describe('OnlineMonitorComponent', () => {
  let component: OnlineMonitorComponent;
  let fixture: ComponentFixture<OnlineMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
