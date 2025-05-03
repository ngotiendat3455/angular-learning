import { TestBed } from '@angular/core/testing';

import { TestCatergoryService } from './test-catergory.service';

describe('TestCatergoryService', () => {
  let service: TestCatergoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCatergoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
