import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordexCameraComponent } from './cordex-camera.component';

describe('CordexCameraComponent', () => {
  let component: CordexCameraComponent;
  let fixture: ComponentFixture<CordexCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordexCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordexCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
