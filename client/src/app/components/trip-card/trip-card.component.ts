import { Component, OnInit } from '@angular/core';

import { User } from '../../services/auth.service'; // new
import { Trip, otherUser } from '../../services/trip.service'; // changed

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input() title!: string;
  @Input() trips!: ReadonlyArray<Trip>;

  constructor() { }

  ngOnInit(): void {
  }

  // new
   otherUser(trip: Trip): User | null {
     return otherUser(trip);
   }
   
}
