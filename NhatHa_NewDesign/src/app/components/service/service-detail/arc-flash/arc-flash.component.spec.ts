import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcFlashComponent } from './arc-flash.component';

describe('ArcFlashComponent', () => {
  let component: ArcFlashComponent;
  let fixture: ComponentFixture<ArcFlashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcFlashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcFlashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
