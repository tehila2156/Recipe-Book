import { TestBed } from '@angular/core/testing';

import { RecipyService } from '../service/user/recipy/recipy.service';

describe('RecipyService', () => {
  let service: RecipyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
