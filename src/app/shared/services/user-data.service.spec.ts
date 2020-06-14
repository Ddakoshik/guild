import { TestBed, inject } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService],
      imports: [ HttpClientTestingModule ]
    });

      // Inject the http service and test controller for each test
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});
