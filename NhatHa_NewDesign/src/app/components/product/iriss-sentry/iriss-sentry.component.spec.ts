import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrissSentryComponent } from './iriss-sentry.component';

describe('IrissSentryComponent', () => {
  let component: IrissSentryComponent;
  let fixture: ComponentFixture<IrissSentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrissSentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrissSentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
