import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripChartComponent } from './trip-chart.component';

describe('TripChartComponent', () => {
  let component: TripChartComponent;
  let fixture: ComponentFixture<TripChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
