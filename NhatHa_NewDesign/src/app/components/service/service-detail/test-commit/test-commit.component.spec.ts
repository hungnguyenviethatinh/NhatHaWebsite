import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCommitComponent } from './test-commit.component';

describe('TestCommitComponent', () => {
  let component: TestCommitComponent;
  let fixture: ComponentFixture<TestCommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCommitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
