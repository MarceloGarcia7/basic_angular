import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styles: []
})
export class PassengerCountComponent implements OnInit {

  @Input() items: Passenger[];

  constructor() { }

  ngOnInit() {
    // console.log(this.items.length)
  }

  getTotalPass() {
    if (!this.items) { return; }

    return this.items.filter( (pasajero: Passenger) => pasajero.checkedIn ).length;
    // return this.items.filter( (pasajero: Passenger) => pasajero.checkedIn ).map(pasajero => pasajero.name)
  }

}
