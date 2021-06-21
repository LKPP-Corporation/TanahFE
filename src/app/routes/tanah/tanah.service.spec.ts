import { TestBed } from '@angular/core/testing';

import { TanahService } from './tanah.service';

describe('TanahService', () => {
  let service: TanahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TanahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
