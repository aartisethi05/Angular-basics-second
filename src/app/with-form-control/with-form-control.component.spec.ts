import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithFormControlComponent } from './with-form-control.component';

describe('WithFormControlComponent', () => {
  let component: WithFormControlComponent;
  let fixture: ComponentFixture<WithFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
