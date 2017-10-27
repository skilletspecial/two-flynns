import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public destinations: Array<any>;
  public milesTraveled: number;
  public bathroomBreaks: number;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.destinations = data.trips;
  }

  ngOnInit() {
    this.milesTraveled = this.countMilesTraveled();
    this.bathroomBreaks = Math.round((this.milesTraveled/400));
  }

  private countMilesTraveled(): number {
    let sum = 0;
    this.destinations.forEach(destination => {
      sum += destination.milesDriven;
      sum += destination.milesFlown;
    });

    return sum;
  }

}
