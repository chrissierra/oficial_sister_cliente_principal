import { TestBed } from '@angular/core/testing';

import { GeneradorDocumentosService } from './generador-documentos.service';

describe('GeneradorDocumentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneradorDocumentosService = TestBed.get(GeneradorDocumentosService);
    expect(service).toBeTruthy();
  });
});
