/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrologService } from './prolog.service';

describe('Service: Prolog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrologService]
    });
  });

  it('should ...', inject([PrologService], (service: PrologService) => {
    expect(service).toBeTruthy();
  }));
});
