import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpMaintainComponent } from './ep-maintain.component';

describe('EpMaintainComponent', () => {
  let component: EpMaintainComponent;
  let fixture: ComponentFixture<EpMaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpMaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
