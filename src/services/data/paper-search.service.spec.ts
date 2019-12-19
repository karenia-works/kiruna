import { TestBed } from '@angular/core/testing';

import { PaperSearchService } from './paper-search.service';

describe('PaperSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaperSearchService = TestBed.get(PaperSearchService);
    expect(service).toBeTruthy();
  });
});
