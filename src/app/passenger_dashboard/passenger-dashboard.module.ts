import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// Container
import { PassengerDashboardComponent } from './container/passenger_dash/passenger-dashboard.component';
// Components
import { PassengerActionsComponent } from './components/passenger-actions/passenger-actions.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
// Servicios
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    // AppComponent
    PassengerDashboardComponent,
    PassengerActionsComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
   PassengerDashboardService
  ],
  exports: [
    PassengerDashboardComponent
  ]
  // bootstrap: [AppComponent]
})
export class PassengerDashboardModule { }
