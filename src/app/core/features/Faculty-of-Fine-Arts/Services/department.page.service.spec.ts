/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Department.pageService } from './department.page.service';

describe('Service: Department.page', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Department.pageService]
    });
  });

  it('should ...', inject([Department.pageService], (service: Department.pageService) => {
    expect(service).toBeTruthy();
  }));
});
