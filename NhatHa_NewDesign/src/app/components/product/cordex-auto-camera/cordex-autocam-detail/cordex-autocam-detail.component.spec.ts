import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordexAutocamDetailComponent } from './cordex-autocam-detail.component';

describe('CordexAutocamDetailComponent', () => {
  let component: CordexAutocamDetailComponent;
  let fixture: ComponentFixture<CordexAutocamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordexAutocamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordexAutocamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
