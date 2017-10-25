import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-trip-chart',
  templateUrl: './trip-chart.component.html',
  styleUrls: ['./trip-chart.component.scss']
})
export class TripChartComponent implements OnInit {

  private chartData: any;
  private labels: Array<string> = [];

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.chartData = data;
    console.log(this.getLabels());
  }

  ngOnInit() {
  }

  private getLabels() {
    this.chartData.trips.forEach(element => {
      if (!this.labels.includes(element.year)) {
        this.labels.push(element.year);
      }
    });
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80], label: 'Miles Driven'},
    {data: [28, 48, 40], label: 'Miles Flown'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      (Math.random() * 100)];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


}
