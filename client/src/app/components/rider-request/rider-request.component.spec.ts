// client/src/app/components/rider-request/rider-request.component.spec.ts

import { HttpClientTestingModule } from '@angular/common/http/testing'; // new
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // new
import { RouterTestingModule } from '@angular/router/testing';

import { TripService } from '../../services/trip.service'; // new
import { createFakeTrip } from '../../testing/factories'; // new
import { RiderRequestComponent } from './rider-request.component';

describe('RiderRequestComponent', () => {
  let component: RiderRequestComponent;
  let fixture: ComponentFixture<RiderRequestComponent>;
  let tripService: TripService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ RiderRequestComponent ],
      providers: [ TripService ] // new
    });
    fixture = TestBed.createComponent(RiderRequestComponent);
    component = fixture.componentInstance;
    tripService = TestBed.inject(TripService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // new
  it('should handle form submit', () => {
    const spyCreateTrip = spyOn(tripService, 'createTrip');
    const spyNavigateByUrl = spyOn(router, 'navigateByUrl');
    component.trip = createFakeTrip();
    component.onSubmit();
    expect(spyCreateTrip).toHaveBeenCalledWith(component.trip);
    expect(spyNavigateByUrl).toHaveBeenCalledWith('/rider');
  });
});
