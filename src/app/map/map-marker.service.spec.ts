import { TestBed, inject } from '@angular/core/testing';

import { MapMarkerService } from './map-marker.service';

describe('MapMarkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapMarkerService]
    });
  });

  it('should be created', inject([MapMarkerService], (service: MapMarkerService) => {
    expect(service).toBeTruthy();
  }));
});
