import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripChartsDialogComponent } from './trip-charts-dialog.component';

describe('TripChartsDialogComponent', () => {
  let component: TripChartsDialogComponent;
  let fixture: ComponentFixture<TripChartsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripChartsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripChartsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
