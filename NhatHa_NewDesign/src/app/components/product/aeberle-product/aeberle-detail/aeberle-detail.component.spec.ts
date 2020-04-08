import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeberleDetailComponent } from './aeberle-detail.component';

describe('AeberleDetailComponent', () => {
  let component: AeberleDetailComponent;
  let fixture: ComponentFixture<AeberleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeberleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeberleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
