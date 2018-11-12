import { TestBed } from '@angular/core/testing';

import { NgExampleLibService } from './ng-example-lib.service';

describe('NgExampleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgExampleLibService = TestBed.get(NgExampleLibService);
    expect(service).toBeTruthy();
  });
});
