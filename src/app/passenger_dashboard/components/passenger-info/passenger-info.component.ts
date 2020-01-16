import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styles: []
})
export class PassengerInfoComponent implements OnChanges {

  @Input() pasajero: Passenger;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (this.pasajero) {
      console.log(changes);
    } else {
      console.log('NO selection');
    }
  }

}
