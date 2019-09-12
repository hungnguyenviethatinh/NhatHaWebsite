import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEquipComponent } from './our-equip.component';

describe('OurEquipComponent', () => {
  let component: OurEquipComponent;
  let fixture: ComponentFixture<OurEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
