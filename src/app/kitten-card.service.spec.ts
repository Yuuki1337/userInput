import { TestBed } from '@angular/core/testing';

import { KittenCardService } from './kitten-card.service';

describe('KittenCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittenCardService = TestBed.get(KittenCardService);
    expect(service).toBeTruthy();
  });
});
