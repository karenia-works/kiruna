import { TestBed } from '@angular/core/testing';

import { HookService } from './hook.service';

describe('HookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HookService = TestBed.get(HookService);
    expect(service).toBeTruthy();
  });
});
