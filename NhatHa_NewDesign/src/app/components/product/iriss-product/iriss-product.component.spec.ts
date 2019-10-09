import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrissProductComponent } from './iriss-product.component';

describe('IrissProductComponent', () => {
  let component: IrissProductComponent;
  let fixture: ComponentFixture<IrissProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrissProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrissProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
