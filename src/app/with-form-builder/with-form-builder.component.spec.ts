import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithFormBuilderComponent } from './with-form-builder.component';

describe('WithFormBuilderComponent', () => {
  let component: WithFormBuilderComponent;
  let fixture: ComponentFixture<WithFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
