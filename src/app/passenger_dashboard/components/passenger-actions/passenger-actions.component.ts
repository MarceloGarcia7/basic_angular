import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passenger-actions',
  templateUrl: './passenger-actions.component.html',
  styles: []
})
export class PassengerActionsComponent implements OnInit {

  display: boolean;
  activo: any = {background: 'grey', border: 'none', boxShadow: 'none'};

  @Output()
  // tslint:disable-next-line: new-parens
  filter: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  handleEvent(data: any) {
    // console.log(data);
    this.display = data;
    console.log(this.display);
    this.filter.emit(this.display);
  }

}
