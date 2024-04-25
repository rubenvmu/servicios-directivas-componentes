import { TestBed } from '@angular/core/testing';

import { ServiceValidadorService } from './service.validador.service';

describe('ServiceValidadorService', () => {
  let service: ServiceValidadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceValidadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
