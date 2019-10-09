import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordexAutoCameraComponent } from './cordex-auto-camera.component';

describe('CordexAutoCameraComponent', () => {
  let component: CordexAutoCameraComponent;
  let fixture: ComponentFixture<CordexAutoCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordexAutoCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordexAutoCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
