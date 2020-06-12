import { TestBed, inject } from '@angular/core/testing';

import { Basicauth.InterceptorService } from './basicauth.interceptor.service';

describe('Basicauth.InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Basicauth.InterceptorService]
    });
  });

  it('should be created', inject([Basicauth.InterceptorService], (service: Basicauth.InterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
