import { TestBed } from '@angular/core/testing';

import { SidebarModalServiceService } from './sidebar-modal-service.service';

describe('SidebarModalServiceService', () => {
  let service: SidebarModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
