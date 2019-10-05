import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbmToolComponent } from './cbm-tool.component';

describe('CbmToolComponent', () => {
  let component: CbmToolComponent;
  let fixture: ComponentFixture<CbmToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbmToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbmToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
