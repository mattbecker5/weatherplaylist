import { Component, OnInit } from '@angular/core';
import { UserEvent } from 'src/app/models/user-event';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public event: UserEvent;

  constructor() { }

  ngOnInit(): void {
    let eventTest = {
      year: "2020",
      month: "4",
      day: "23",
      dayLong: "",
      type: "class",
      title: "Davinci Contest",
      startTime: "8am",
      endTime: "11am"
    }

    this.event = new UserEvent(eventTest);

    // this.event = new UserEvent("2020","4","23",'','Class','Davinci Contest','8am','11am');

  }

  public prevEvent(){
    console.log('Loading previous event');
  }

  public nextEvent(){
    console.log('Loading next event');
  }
}
