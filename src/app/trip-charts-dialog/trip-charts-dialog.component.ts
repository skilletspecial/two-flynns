import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-trip-charts-dialog',
  templateUrl: './trip-charts-dialog.component.html',
  styleUrls: ['./trip-charts-dialog.component.scss']
})
export class TripChartsDialogComponent implements OnInit {

  private chartData: any;
  public barChartLabels: Array<number> = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartData: Array<IChartDatum> = [];
  public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(46,204,113,1)',
      borderColor: 'rgba(146,204,113,1)'
    },
    {
      backgroundColor: 'rgba(41,128,185,1)',
      borderColor: 'rgba(41,128,185,1)'
    },
  ];

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.chartData = data;
  }

  ngOnInit() {
    this.populateChartLabels();
    this.populateChartData();
  }

  private populateChartLabels() {
    this.chartData.trips.forEach(trip => {
      if (!this.barChartLabels.includes(trip.year)) {
        this.barChartLabels.push(trip.year);
      }
    });
  }

  private populateChartData() {
    this.barChartData = [
      { data: [], label: 'Miles Driven' },
      { data: [], label: 'Miles Flown' }
    ];

    let travelTotals: Array<IYearMilesTotals> = [];

    this.barChartLabels.forEach(label => {
      travelTotals.push({ year: label, milesDriven: 0, milesFlown: 0 });
    });

    this.chartData.trips.forEach(trip => {
      travelTotals.forEach(total => {
        if (trip.year === total.year) {
          total.milesDriven += trip.milesDriven;
          total.milesFlown += trip.milesFlown;
        }
      });
    });

    travelTotals.forEach(total => {
      this.barChartData[0].data.push(total.milesDriven);
      this.barChartData[1].data.push(total.milesFlown);
    });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

interface IChartDatum {
  data: Array<number>;
  label: string;
  backgroundColor?: string;
}

interface IYearMilesTotals {
  year: number;
  milesDriven: number;
  milesFlown: number;
}
