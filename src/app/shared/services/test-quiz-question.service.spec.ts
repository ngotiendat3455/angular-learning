import { TestBed } from '@angular/core/testing';

import { TestQuizQuestionService } from './test-quiz-question.service';

describe('TestQuizQuestionService', () => {
  let service: TestQuizQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestQuizQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
