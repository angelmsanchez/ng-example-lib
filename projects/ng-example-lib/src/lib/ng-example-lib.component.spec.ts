import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgExampleLibComponent } from './ng-example-lib.component';

describe('NgExampleLibComponent', () => {
  let component: NgExampleLibComponent;
  let fixture: ComponentFixture<NgExampleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgExampleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgExampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
