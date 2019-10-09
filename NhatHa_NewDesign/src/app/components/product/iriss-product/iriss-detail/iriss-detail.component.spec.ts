import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrissDetailComponent } from './iriss-detail.component';

describe('IrissDetailComponent', () => {
  let component: IrissDetailComponent;
  let fixture: ComponentFixture<IrissDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrissDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrissDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
