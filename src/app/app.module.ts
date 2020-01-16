import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Modules
import { PassengerDashboardModule } from './passenger_dashboard/passenger-dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Servicios
// import { HttpClientModule } from '@angular/common/http';
// import { PassengerDashboardService } from './passenger_dashboard/passenger-dashboard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,
    // HttpClientModule
  ],
  providers: [
   // PassengerDashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
