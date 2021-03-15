/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { GeneratorService } from './generator.service';

describe('Service: Generator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneratorService],
    });
  });

  it('should ...', inject([GeneratorService], (service: GeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
