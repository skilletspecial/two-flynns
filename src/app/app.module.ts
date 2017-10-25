import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { MatSliderModule, MatSidenavModule, MatButtonModule, MatSlideToggleModule, MatExpansionModule, MatDialogModule, MatTableModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { IconList, IconBarChart2 } from 'angular-feather'
import { ChartsModule } from 'ng2-charts'

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TripListComponent } from './trip-list/trip-list.component';

import { MapMarkerService } from './map/map-marker.service';
import { TripChartComponent } from './trip-chart/trip-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TripListComponent,
    TripChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhJ1QaIMu0XptyDLOUSs1YzQ4SmH7jVG8'
    }),
    AngularFireModule.initializeApp(environment.firebase, "two-flynns"),
    AngularFireDatabaseModule,
    MatSliderModule,
    MatSidenavModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    IconList,
    IconBarChart2,
    ChartsModule
  ],
  providers: [
    MapMarkerService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TripListComponent,
    TripChartComponent
  ]
})
export class AppModule { }
