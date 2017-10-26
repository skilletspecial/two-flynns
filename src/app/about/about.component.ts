import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public destinations: Array<any>;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.destinations = data.trips;
  }

  ngOnInit() {
  }

}
