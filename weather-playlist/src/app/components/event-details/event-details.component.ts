import { Component, OnInit } from '@angular/core';
import { UserEvent } from 'src/app/models/user-event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public event: UserEvent;

  constructor() { }

  ngOnInit(): void {
    this.event = new UserEvent(2020,4,23,'','Class','Davinci Contest','8am','11am');

  }

  public prevEvent(){
    console.log('Loading previous event');
  }

  public nextEvent(){
    console.log('Loading next event');
  }
}
