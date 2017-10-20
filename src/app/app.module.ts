import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { MatSliderModule, MatSidenavModule, MatButtonModule, MatSlideToggleModule, MatExpansionModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { MapMarkerService } from './map/map-marker.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
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
    MatExpansionModule
  ],
  providers: [
    MapMarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
