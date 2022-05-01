import { TestBed } from '@angular/core/testing';

import { NgswWorkerService } from './ngsw-worker.service';

describe('NgswWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgswWorkerService = TestBed.get(NgswWorkerService);
    expect(service).toBeTruthy();
  });
});
