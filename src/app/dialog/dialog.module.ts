import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { TripListDialogComponent } from './trip-list-dialog/trip-list-dialog.component';
import { TripChartsDialogComponent } from './trip-charts-dialog/trip-charts-dialog.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    ChartsModule
  ],
  declarations: [
    TripListDialogComponent,
    TripChartsDialogComponent,
    AboutDialogComponent
  ],
  entryComponents: [
    TripListDialogComponent,
    TripChartsDialogComponent,
    AboutDialogComponent
  ]
})
export class DialogModule { }
