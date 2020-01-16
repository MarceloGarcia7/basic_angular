import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {

  title: string;
  display: boolean = null;
  passengers: any; /* de otra manera ( [],{} ) sale errores */
  passenger: Passenger;


  constructor(private passengerService: PassengerDashboardService ) {
    this.title = 'New';
  }

  ngOnInit() {
    // console.log('getAPI');
    this.passengerService.getPassenger()
      .subscribe( data =>
        ( this.passengers = data ),
        ( err => console.log(err) )
        );
  }

  handleFilter(filter: any) {
    console.log(filter);
    this.display = filter;
    console.log(this.display);
  }

  onClickEdit(event: Passenger) {
    console.log(event);
    this.passengerService.updatePassenger(event).subscribe( (data) => {
      console.log(data);
      this.passengers = this.passengers.map((pasajero: Passenger) =>
          pasajero.id === event.id ? (pasajero = event) : pasajero );
    }, (err: any) => console.log(err)
    );
  }

  onClickRemove(event: Passenger) {
    console.log('PARENT', event);
    this.passengerService.removePassenger(event)
      .subscribe((resp) => {
        // console.log(resp);
        this.passengers = this.passengers.filter( ( pasajero: Passenger ) => pasajero.id !== event.id );
        // console.log(this.passengers);
      },
      (err) => console.log(err)
    );
  }

  onClickCheckIn(event: Passenger) {
    console.log('PARENT', event);
    this.onClickEdit(event);
    // this.passengers = this.passengers.map( (pasajero: Passenger) => pasajero.id === event.id ? (pasajero = event) : pasajero );
  }

  onClickInfo(event: Passenger) {
    console.log('PARENT', event);
    this.passenger = event;
  }


}
