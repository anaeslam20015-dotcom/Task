import { TestBed } from '@angular/core/testing';

import { Task2Service } from './task-2.service';

describe('Task2Service', () => {
  let service: Task2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
