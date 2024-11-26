import { TestBed } from '@angular/core/testing';

import { QuizMakerStateService } from './quiz-maker-state.service';

describe('QuizMakerStateService', () => {
  let service: QuizMakerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizMakerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
