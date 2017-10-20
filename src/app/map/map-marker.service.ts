import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IMapMarker } from './map-marker';

@Injectable()
export class MapMarkerService {

  constructor(private database: AngularFireDatabase) {}

  public getMapMarkers(): Observable<Array<IMapMarker>> {
    return this.database.list('markers').valueChanges().map((result: any) => {
      return result.map((marker) => {
        return {
          displayTitle: marker.displayTitle,
          completeTitle: marker.completeTitle,
          latitude: marker.latitude,
          longitude: marker.longitude,
          month: marker.month,
          year: marker.year,
          notes: marker.notes,
          description: marker.description,
          milesDriven: marker.milesDriven,
          milesFlown: marker.milesFlown
        }
      });
    });
  }
}
