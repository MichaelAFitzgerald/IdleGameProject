import { TestBed } from '@angular/core/testing';

import { DataStationService } from './data-station.service';

describe('DataStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStationService = TestBed.get(DataStationService);
    expect(service).toBeTruthy();
  });
});
