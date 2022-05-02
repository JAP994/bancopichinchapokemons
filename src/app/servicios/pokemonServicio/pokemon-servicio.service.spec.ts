import { TestBed } from '@angular/core/testing';

import { PokemonServicioService } from './pokemon-servicio.service';

describe('PokemonServicioService', () => {
  let service: PokemonServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
