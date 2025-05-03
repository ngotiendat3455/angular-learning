import { TestBed } from '@angular/core/testing';

import { TestQuizMarkService } from './test-quiz-mark.service';

describe('TestQuizMarkService', () => {
  let service: TestQuizMarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestQuizMarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
