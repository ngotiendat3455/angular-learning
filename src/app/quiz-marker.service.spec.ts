import { TestBed } from '@angular/core/testing';

import { QuizMarkerService } from './quiz-marker.service';

describe('QuizMarkerService', () => {
  let service: QuizMarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizMarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
