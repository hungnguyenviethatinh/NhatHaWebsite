import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalMaintainComponent } from './conditional-maintain.component';

describe('ConditionalMaintainComponent', () => {
  let component: ConditionalMaintainComponent;
  let fixture: ComponentFixture<ConditionalMaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalMaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
