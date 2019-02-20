import { TestBed } from '@angular/core/testing';

import { JefaturasService } from './jefaturas.service';

describe('JefaturasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JefaturasService = TestBed.get(JefaturasService);
    expect(service).toBeTruthy();
  });
});
