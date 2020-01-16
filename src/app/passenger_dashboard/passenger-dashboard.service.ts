import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Passenger } from './models/passenger.interface';
import { Observable } from 'rxjs';

const PASSENGER_API = `${environment.backend}/passengers`;


@Injectable({
  providedIn: 'root'
})

export class PassengerDashboardService {

  list: Passenger[];

  constructor(private http: HttpClient) { }

  getPassenger() {
    console.log('getPassenger ', PASSENGER_API);

    return this.http.get(PASSENGER_API)
      .pipe( map( resp => {
        return resp;
      })
      );
  }


  updatePassenger( passenger: Passenger ) {
    console.log('updatePassenger');
    return this.http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger)
        .pipe( map( (response: any) => {
          console.log(response);
        }));
  }

  removePassenger( passenger: Passenger ) {
    console.log('removePassenger');
    return this.http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        .pipe( map( (response: any) => {
          console.log(response);
        }));
  }


}
