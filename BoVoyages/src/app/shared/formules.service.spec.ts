import { TestBed } from '@angular/core/testing';

import { FormulesService } from './formules.service';

describe('FormulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormulesService = TestBed.get(FormulesService);
    expect(service).toBeTruthy();
  });
});
