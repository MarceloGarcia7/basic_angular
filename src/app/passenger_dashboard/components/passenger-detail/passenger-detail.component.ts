import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
// import { PassengerInfoComponent } from './passenger-info/passenger-info.component';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  // styles: [],
  styleUrls: ['./passenger-detail.component.css']
})

export class PassengerDetailComponent implements OnInit {

    editing = false;
    itemId: number;
    propName: string;
    passenger: Passenger;

    @Input() passengers: Passenger [];
    @Input() display: boolean;

    @Output() edit: EventEmitter<Passenger> = new EventEmitter();
    @Output() remove: EventEmitter<Passenger> = new EventEmitter();
    @Output() checkIn: EventEmitter<Passenger> = new EventEmitter();
    @Output() info: EventEmitter<Passenger> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log(this.passengers, this.display);
  }

  handleChange( value: string) {
    console.log('handleChange ', value);
    this.propName = value;
  }

  onClickEdit( passenger: Passenger ) {
    // console.log('edit', passenger, this.editing);
    this.itemId = passenger.id;
    if (this.editing) {
      const updated = {
        ...passenger, fullname : this.propName,
      };
      // console.log(updated);
      this.edit.emit(updated);
    }
    this.editing = !this.editing;
  }

  onClickRemove( passenger: Passenger) {
    // console.log('Remove', passenger);
    this.remove.emit( passenger );
  }

  onClickCheckIn(passenger: Passenger) {
    const date = Date.now();
    // console.log(passenger, date );
    const passUpdated = {
      ...passenger, checkedIn: true, checkInDate: date
    };
    // console.log(passUpdated);
    this.checkIn.emit( passUpdated );
  }

  onClickInfo(pasajero: Passenger) {
    // console.log(pasajero);
    this.info.emit(pasajero);
    // tslint:disable-next-line: no-unused-expression
    this.itemId = pasajero.id;
    this.passenger = pasajero;
    // console.log(this.passenger);
  }

}
