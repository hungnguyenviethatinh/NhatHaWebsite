import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmersonIntellisawComponent } from './emerson-intellisaw.component';

describe('EmersonIntellisawComponent', () => {
  let component: EmersonIntellisawComponent;
  let fixture: ComponentFixture<EmersonIntellisawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmersonIntellisawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmersonIntellisawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
