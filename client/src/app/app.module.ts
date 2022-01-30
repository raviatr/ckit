// client/src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // new
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // new

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service'; // new
import { IsDriver } from './services/is-driver.service';
import { IsRider } from './services/is-rider.service'; // new

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RiderComponent } from './components/rider/rider.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RiderDashboardComponent } from './components/rider-dashboard/rider-dashboard.component';

import { TripListResolver } from './services/trip-list.resolver';
import { TripService } from './services/trip.service';
import { RiderRequestComponent } from './components/rider-request/rider-request.component';
import { RiderDetailComponent } from './components/rider-detail/rider-detail.component';
import { TripDetailResolver } from './services/trip-detail.resolver';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriverDashboardComponent } from './components/driver-dashboard/driver-dashboard.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LogInComponent,
    SignUpComponent,
    RiderComponent,
    RiderDashboardComponent,
    RiderRequestComponent,
    RiderDetailComponent,
    TripCardComponent,
    DriverComponent,
    DriverDashboardComponent,
    DriverDetailComponent
  ],
  imports: [
    HttpClientModule, // new
    BrowserModule,
    FormsModule, // new
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService, // new
    IsRider,
    IsDriver, // new
    TripDetailResolver, // new
    TripListResolver, // new
    TripService // new // new
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
