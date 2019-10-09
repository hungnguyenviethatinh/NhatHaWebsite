import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrissDeltaComponent } from './iriss-delta.component';

describe('IrissDeltaComponent', () => {
  let component: IrissDeltaComponent;
  let fixture: ComponentFixture<IrissDeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrissDeltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrissDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
