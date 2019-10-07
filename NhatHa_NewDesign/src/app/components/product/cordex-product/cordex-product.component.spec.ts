import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordexProductComponent } from './cordex-product.component';

describe('CordexProductComponent', () => {
  let component: CordexProductComponent;
  let fixture: ComponentFixture<CordexProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordexProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordexProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
