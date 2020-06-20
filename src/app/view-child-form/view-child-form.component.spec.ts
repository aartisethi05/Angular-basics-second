import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildFormComponent } from './view-child-form.component';

describe('ViewChildFormComponent', () => {
  let component: ViewChildFormComponent;
  let fixture: ComponentFixture<ViewChildFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
