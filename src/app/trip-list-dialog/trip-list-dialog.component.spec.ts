import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListDialogComponent } from './trip-list-dialog.component';

describe('TripListDialogComponent', () => {
  let component: TripListDialogComponent;
  let fixture: ComponentFixture<TripListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
