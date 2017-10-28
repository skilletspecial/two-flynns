import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { MatSliderModule, MatSidenavModule, MatButtonModule, MatSlideToggleModule, MatExpansionModule, MatDialogModule, MatTableModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { IconList, IconBarChart2, IconSun, IconMoon, IconUsers } from 'angular-feather'
import { ChartsModule } from 'ng2-charts'

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TripListDialogComponent } from './trip-list-dialog/trip-list-dialog.component';

import { MapMarkerService } from './map/map-marker.service';
import { TripChartsDialogComponent } from './trip-charts-dialog/trip-charts-dialog.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TripListDialogComponent,
    TripChartsDialogComponent,
    AboutDialogComponent
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
    IconSun,
    IconMoon,
    IconUsers,
    ChartsModule
  ],
  providers: [
    MapMarkerService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TripListDialogComponent,
    TripChartsDialogComponent,
    AboutDialogComponent
  ]
})
export class AppModule { }
