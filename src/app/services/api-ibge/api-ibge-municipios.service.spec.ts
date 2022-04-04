import { TestBed } from '@angular/core/testing';

import { ApiIbgeMunicipiosService } from './api-ibge-municipios.service';

describe('ApiIbgeMunicipiosService', () => {
  let service: ApiIbgeMunicipiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIbgeMunicipiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
