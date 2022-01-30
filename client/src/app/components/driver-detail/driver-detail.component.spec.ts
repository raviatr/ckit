// client/src/app/components/driver-detail/driver-detail.component.spec.ts

import { HttpClientTestingModule } from '@angular/common/http/testing'; // new
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Data } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable, of } from 'rxjs';

import { TripService } from '../../services/trip.service'; // new
import { createFakeTrip } from '../../testing/factories';
import { DriverDetailComponent } from './driver-detail.component';

describe('DriverDetailComponent', () => {
  let component: DriverDetailComponent;
  let fixture: ComponentFixture<DriverDetailComponent>;
  let tripService: TripService; // new
  const trip = createFakeTrip();

  class MockActivatedRoute {
    data: Observable<Data> = of({
      trip
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // new
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ DriverDetailComponent ],
      providers: [
        TripService, // new
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    });
    fixture = TestBed.createComponent(DriverDetailComponent);
    component = fixture.componentInstance;
    tripService = TestBed.inject(TripService); // new
  });

  it('should update data on initialization', waitForAsync(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.trip).toEqual(trip);
    });
    component.ngOnInit();
  }));

  // new
  it('should update trip status', () => {
    const spyUpdateTrip = spyOn(tripService, 'updateTrip');
    component.trip = createFakeTrip();
    component.updateTripStatus('STARTED');
    expect(spyUpdateTrip).toHaveBeenCalledWith(component.trip);
  });
});
