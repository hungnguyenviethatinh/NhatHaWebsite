import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraredScanComponent } from './infrared-scan.component';

describe('InfraredScanComponent', () => {
  let component: InfraredScanComponent;
  let fixture: ComponentFixture<InfraredScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraredScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraredScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
