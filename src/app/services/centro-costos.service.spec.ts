import { TestBed } from '@angular/core/testing';

import { CentroCostosService } from './centro-costos.service';

describe('CentroCostosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentroCostosService = TestBed.get(CentroCostosService);
    expect(service).toBeTruthy();
  });
});
