import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeberleProductComponent } from './aeberle-product.component';

describe('AeberleProductComponent', () => {
  let component: AeberleProductComponent;
  let fixture: ComponentFixture<AeberleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeberleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeberleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
